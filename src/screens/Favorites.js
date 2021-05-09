import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import houseActions from '../redux/actions/HouseActions';


const Favorites = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(state => state.favoriteReducer);

  const houses = useSelector(state => state.houseReducer);
  let myFavorites = [];

  if (houses.houses !== undefined && favorites.favorites !== undefined) {
    console.log('favorites');

    myFavorites = houses.houses.filter(elm1 => favorites.favorites.map(elm =>
      JSON.stringify(elm.house_id)).includes(JSON.stringify(elm1.id)));
    // console.log(myFavorites[0]);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(houseActions.getAllFavorites(user.id));
  }, []);

  useEffect(() => {
    dispatch(houseActions.getAllHouses());
  }, []);

  return (
    <div>
      <div className="col-lg-8 offset-lg-2">

        <p>You are logged in with React Hooks!!</p>
        {favorites.loading && <em>Loading favorites...</em>}
        {favorites.error && <span className="text-danger">ERROR: {favorites.error}</span>}
        {favorites.favorites &&
          <ul>
            {myFavorites.map(house =>
              <li key={house.id}>
                <Link to={`/details/${house.id}`}>
                  {`${house.about} - `}
                  {`${house.owner}`}
                  <img src={house.picture} alt={house.owner} width='300' />
                </Link>
              </li>,
            )}
          </ul>
        }
      </div>
    </div>
  );
};

export default Favorites;
