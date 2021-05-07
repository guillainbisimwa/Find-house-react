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
  let user = {};

  await axios.request(options)
    .then(async (response) => {
      user = await response.data;
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

const register = async (user) => {
  const options = {
    method: 'POST',
    url: 'https://find-your-house-backend.herokuapp.com/signup',
    params: {},
    headers: { },
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
      loggedUser.name = user.email;

      localStorage.setItem('user', JSON.stringify(loggedUser));
      return loggedUser;
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
