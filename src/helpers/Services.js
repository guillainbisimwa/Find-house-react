import axios from 'axios';
import authHeader from './AuthHeader';

const login = async (name, password) => {
  const options = {
    method: 'POST',
    url: 'https://find-your-house-backend.herokuapp.com/auth/login',
    params: {},
    headers: {},
    data: {
      email: name,
      password,
    },
  };

  axios.request(options)
    .then((response) => {
      const user = response.data;
      user.name = name;
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

const logout = async () => {
  const options = {
    method: 'DELETE',
    url: 'https://find-your-house-backend.herokuapp.com/users/sign_out',
    headers: authHeader(),
  };
  axios.request(options)
    .then((response) => {
      console.log(response.data);

      // remove user from local storage to log user out
      localStorage.removeItem('user');
    })
    .catch((error) => {
      console.error(error);
    });
};

const register = (user) => {
  const options = {
    method: 'POST',
    url: 'https://find-your-house-backend.herokuapp.com/auth/login',
    params: {},
    headers: {
      'content-type': 'application/json',
    },
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation,
    },
  };

  axios
    .request(options)
    .then((response) => {
      const loggedUser = response.data;
      loggedUser.name = user.name;

      localStorage.setItem('user', JSON.stringify(loggedUser));

      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

const userService = {
  login,
  logout,
  register,
};

export default userService;
