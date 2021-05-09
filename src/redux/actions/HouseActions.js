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
        houses => dispatch(success(houses)),
        error => dispatch(failure(error.toString())),
      );
  };
};

const houseActions = {
  getAllHouses,
};

export default houseActions;
