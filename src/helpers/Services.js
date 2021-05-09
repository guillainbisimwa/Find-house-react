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

  return axios.request(options)
    .then((response) => {
      user = response.data;
      user.name = name;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    })
    .catch(error => error.response);
};

const logout = async () => {
  const options = {
    method: 'DELETE',
    url: 'https://find-your-house-backend.herokuapp.com/users/sign_out',
    headers: authHeader(),
  };

  return axios.request(options)
    .then((response) => {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
      return response;
    })
    .catch(error => error.response);
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

  return axios.request(options)
    .then((response) => {
      const loggedUser = response.data;
      loggedUser.name = user.email;

      localStorage.setItem('user', JSON.stringify(loggedUser));
      return loggedUser;
    })
    .catch(error => error.response);
};

function getAllHouses() {
  const options = {
    method: 'GET',
    url: 'https://find-your-house-backend.herokuapp.com/houses',
    headers: authHeader(),
  };

  return axios.request(options)
    .then(response => response.data)
    .catch(error => error.response);
}

const userService = {
  login,
  logout,
  register,
  getAllHouses,
};

export default userService;
