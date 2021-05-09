import Constants from '../../helpers/Constants';

const house = (state = {}, action) => {
  switch (action.type) {
    case Constants.GETALLHOUSES_REQUEST:
      return {
        loading: true,
      };
    case Constants.GETALLHOUSES_SUCCESS:
      return {
        houses: action,
      };
    case Constants.GETALLHOUSES_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default house;
