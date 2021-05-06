import axios from 'axios';
import authHeader from './AuthHeader';

const login = (username, password) => {
  const options = {
    method: 'POST',
    url: 'https://find-your-house-backend.herokuapp.com/auth/login',
    params: {},
    headers: {
      'content-type': 'application/json',
    },
    data: {
      email: username,
      password,
    },
  };

  axios
    .request(options)
    .then((response) => {
      const user = response.data;
      user.username = username;

      localStorage.setItem('user', JSON.stringify(user));

      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

const logout = () => {
  const options = {
    method: 'DELETE',
    url: 'https://find-your-house-backend.herokuapp.com/users/sign_out',
    headers: authHeader(),
  };

  axios
    .request(options)
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
      const user = response.data;
      user.username = user.name;

      localStorage.setItem('user', JSON.stringify(user));

      return user;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const userService = {
  login,
  logout,
  register,
};

export default userService;