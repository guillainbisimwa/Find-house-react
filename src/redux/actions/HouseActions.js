import Constants from '../../helpers/Constants';
import userService from '../../helpers/Services';
import history from '../../helpers/History';

const getAllHouses = () => {
  const request = house => ({ type: Constants.GETALLHOUSES_REQUEST, house });
  const success = house => ({ type: Constants.GETALLHOUSES_SUCCESS, house });
  const failure = error => ({ type: Constants.GETALLHOUSES_FAILURE, error });

  return dispatch => {
    dispatch(request());

    userService.getAllHouses()
      .then(
        houses => {
          dispatch(success(houses));
        },
        error => dispatch(failure(error.toString())),
      );
  };
};

const getAllFavorites = id => {
  const request = house => ({ type: Constants.GETALLFAVORITES_REQUEST, house });
  const success = house => ({ type: Constants.GETALLFAVORITES_SUCCESS, house });
  const failure = error => ({ type: Constants.GETALLFAVORITES_FAILURE, error });

  return dispatch => {
    dispatch(request());

    userService.getAllFavorites(id)
      .then(
        favorites => {
          dispatch(success(favorites));
        },
        error => dispatch(failure(error.toString())),
      );
  };
};

const addToFavorites = (userId, houseId) => {
  const request = house => ({ type: Constants.ADDTOFAVORITES_REQUEST, house });
  const success = house => ({ type: Constants.ADDTOFAVORITES_SUCCESS, house });
  const failure = error => ({ type: Constants.ADDTOFAVORITES_FAILURE, error });

  return dispatch => {
    dispatch(request());

    userService.addToFavorites(userId, houseId)
      .then(
        favorites => {
          history.push('/favorites');
          dispatch(success(favorites));
        },
        error => dispatch(failure(error.toString())),
      );
  };
};

const removeToFavorites = (userId, houseId) => {
  const request = favorite => ({ type: Constants.REMOVEFAVORITE_REQUEST, favorite });
  const success = favorite => ({ type: Constants.REMOVEFAVORITE_SUCCESS, favorite });
  const failure = error => ({ type: Constants.REMOVEFAVORITE_FAILURE, error });

  return dispatch => {
    dispatch(request());

    userService.deleteFavorite(userId, houseId)
      .then(
        favorites => {
          dispatch(success(favorites));
        },
        error => dispatch(failure(error.toString())),
      );
  };
};

const houseActions = {
  getAllHouses,
  addToFavorites,
  getAllFavorites,
  removeToFavorites,
};

export default houseActions;
