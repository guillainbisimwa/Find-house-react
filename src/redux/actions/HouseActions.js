import Constants from '../../helpers/Constants';
import userService from '../../helpers/Services';

const getAllHouses = () => {
  const request = house => ({ type: Constants.GETALLHOUSES_REQUEST, house });
  const success = house => ({ type: Constants.GETALLHOUSES_SUCCESS, house });
  const failure = error => ({ type: Constants.GETALLHOUSES_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    userService.getAllHouses()
      .then(
        (houses) => {
          dispatch(success(houses));
        },
        error => dispatch(failure(error.toString())),
      );
  };
};

const getAllFavorites = () => {
  const request = house => ({ type: Constants.GETALLFAVORITES_REQUEST, house });
  const success = house => ({ type: Constants.GETALLFAVORITES_SUCCESS, house });
  const failure = error => ({ type: Constants.GETALLFAVORITES_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    userService.getAllFavorites()
      .then(
        (favorites) => {
          dispatch(success(favorites));
        },
        error => dispatch(failure(error.toString())),
      );
  };
};

const addToFavorites = () => {
  const request = house => ({ type: Constants.ADDTOFAVORITES_REQUEST, house });
  const success = house => ({ type: Constants.ADDTOFAVORITES_SUCCESS, house });
  const failure = error => ({ type: Constants.ADDTOFAVORITES_FAILURE, error });

  return (dispatch) => {
    dispatch(request());

    userService.addToFavorites()
      .then(
        (favorites) => {
          dispatch(success(favorites));
        },
        error => dispatch(failure(error.toString())),
      );
  };
};

const houseActions = {
  getAllHouses,
  getAllFavorites,
  addToFavorites,
};

export default houseActions;
