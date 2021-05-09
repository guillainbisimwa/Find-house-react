import notificationActions from './NotificationActions';
import Constants from '../../helpers/Constants';
import userService from '../../helpers/Services';
import history from '../../helpers/History';

const login = (name, password, from = '/') => {
  const request = user => ({ type: Constants.LOGIN_REQUEST, user });
  const success = user => ({ type: Constants.LOGIN_SUCCESS, user });
  const failure = error => ({ type: Constants.LOGIN_FAILURE, error });
  return (dispatch) => {
    dispatch(request({ name }));
    userService.login(name, password).then(
      async (user) => {
        if (user.status !== undefined && user.status !== 200) {
          dispatch(failure(user.data.message));
          dispatch(notificationActions.error(user.data.message));
        } else {
          dispatch(success(user));
          history.push(from);
          dispatch(notificationActions.success('Login successful'));
        }
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
  const request = user => ({ type: Constants.REGISTER_REQUEST, user });
  const success = user => ({ type: Constants.REGISTER_SUCCESS, user });
  const failure = error => ({ type: Constants.REGISTER_FAILURE, error });

  return (dispatch) => {
    dispatch(request(user));

    userService.register(user)
      .then(
        async (user) => {
          if (user.status !== undefined && user.status === 500) {
            dispatch(failure('This email is already in use'));
            dispatch(notificationActions.error('This email is already in use'));
          } else if (user.status !== undefined && user.status !== 200 && user.status !== 500) {
            dispatch(failure(user.data.message));
            dispatch(notificationActions.error(user.data.message));
          } else {
            dispatch(success(user));
            history.push('/');
            dispatch(notificationActions.success(user.message));
          }
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
