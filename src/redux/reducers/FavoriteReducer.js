import Constants from '../../helpers/Constants';

const favorite = (state = {}, action) => {
  switch (action.type) {
    case Constants.GETALLFAVORITES_REQUEST:
      return {
        loading: true,
      };
    case Constants.GETALLFAVORITES_SUCCESS:
      return {
        favorites: action.favorite,
      };
    case Constants.GETALLFAVORITES_FAILURE:
      return {
        error: action.error,
      };
    case Constants.ADDTOFAVORITES_REQUEST:
      return {
        loading: true,
      };
    case Constants.ADDTOFAVORITES_SUCCESS:
      return {
        favorites: action.favorite,
      };
    case Constants.ADDTOFAVORITES_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default favorite;
