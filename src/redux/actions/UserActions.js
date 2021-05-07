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
        console.log(user);
        await dispatch(success({ name, password }));
        history.push(from);

        dispatch(notificationActions.success('Login successful'));
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
          dispatch(success());
          history.push('/');
          console.log('user ------ +++++ ');
          console.log(user);
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
