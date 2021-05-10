import Constants from '../../helpers/Constants';

const notification = (state = {}, action) => {
  switch (action.type) {
    case Constants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case Constants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case Constants.CLEAR:
      return {};
    default:
      return state;
  }
};

export default notification;
