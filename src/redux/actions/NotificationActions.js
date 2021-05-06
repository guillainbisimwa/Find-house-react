import Constants from '../../helpers/Constants';

const success = (message) => ({ type: Constants.SUCCESS, message });

const error = (message) => ({ type: Constants.ERROR, message });

const clear = () => ({ type: Constants.CLEAR });

const notificationActions = {
  success,
  error,
  clear,
};

export default notificationActions;
