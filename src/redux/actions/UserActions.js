import notificationActions from './NotificationActions';
import Constants from '../../helpers/Constants';
import userService from '../../helpers/Services';

function login(username, password) {
  function request(user) { return { type: Constants.LOGIN_REQUEST, user }; }
  function success(user) { return { type: Constants.LOGIN_SUCCESS, user }; }
  function failure(error) { return { type: Constants.LOGIN_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        (user) => {
          dispatch(success(user));
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(notificationActions.error(error.toString()));
        },
      );
  };
}

function logout() {
  userService.logout();
  return { type: Constants.LOGOUT };
}

function register(user) {
  function request(user) { return { type: Constants.REGISTER_REQUEST, user }; }
  function success(user) { return { type: Constants.REGISTER_SUCCESS, user }; }
  function failure(error) { return { type: Constants.REGISTER_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request(user));

    userService.register(user)
      .then(
        () => {
          dispatch(success());
          dispatch(notificationActions.success('Registration successful'));
        },
        (error) => {
          dispatch(failure(error.toString()));
          dispatch(notificationActions.error(error.toString()));
        },
      );
  };
}

const userActions = {
  login,
  logout,
  register,
};

export default userActions;
