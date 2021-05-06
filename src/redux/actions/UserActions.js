import notificationActions from './NotificationActions';
import Constants from '../../helpers/Constants';
import userService from '../../helpers/Services';

const login = (username, password) => {
  const request = (user) => ({ type: Constants.LOGIN_REQUEST, user });
  const success = (user) => ({ type: Constants.LOGIN_SUCCESS, user });
  const failure = (error) => ({ type: Constants.LOGIN_FAILURE, error });

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
};

const logout = () => {
  userService.logout();
  return { type: Constants.LOGOUT };
};

const register = (user) => {
  const request = (user) => ({ type: Constants.REGISTER_REQUEST, user });
  const success = (user) => ({ type: Constants.REGISTER_SUCCESS, user });
  const failure = (error) => ({ type: Constants.REGISTER_FAILURE, error });

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
};

const userActions = {
  login,
  logout,
  register,
};

export default userActions;
