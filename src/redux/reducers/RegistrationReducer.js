import Constants from '../../helpers/Constants';

const registration = (state = {}, action) => {
  switch (action.type) {
    case Constants.REGISTER_REQUEST:
      return { registering: true };
    case Constants.REGISTER_SUCCESS:
      return {};
    case Constants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};

export default registration;
