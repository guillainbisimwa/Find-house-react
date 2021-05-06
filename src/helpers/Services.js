import axios from 'axios';

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

export const userService = {
  login,
};

export default userService;
