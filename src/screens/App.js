import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import houseActions from '../redux/actions/HouseActions';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.authenticationReducer.user);
  const houses = useSelector(state => state.houseReducer);
  const favorites = useSelector(state => state.favoriteReducer);
  const userLogged = JSON.parse(localStorage.getItem('user'));

  let myFavorites = [];

  if (houses.houses !== undefined && favorites.favorites !== undefined) {
    myFavorites = houses.houses.filter(elm1 => favorites.favorites.map(elm =>
      JSON.stringify(elm.house_id)).includes(JSON.stringify(elm1.id)));
  }

  useEffect(() => {
    dispatch(houseActions.getAllHouses());
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(houseActions.getAllFavorites(user.id));
  }, []);

  const addToFavorites = (houseId, e) => {
    e.preventDefault();
    dispatch(houseActions.addToFavorites(userLogged.id, houseId));
  };

  const checkIfFavorite = (id) => {
    const found = myFavorites.some(item => item.id === id);
    return found;
  };

  return (
    <div>
      <Header user={userLogged.name} />
      <div className="col-lg-8 offset-lg-2">
        <h1>Hi {user.name}!</h1>
        <p>You are logged in with React Hooks!!</p>
        {houses.loading && <em>Loading houses...</em>}
        {houses.error && <span className="text-danger">ERROR: {houses.error}</span>}
        {houses.houses &&
          <ul>
            {houses.houses.map(house =>
              <li key={house.id}>
                <Link to={`/details/${house.id}`}>
                  {`${house.about} - `}
                  {`${house.owner}`}
                  <img src={house.picture} alt={house.owner} width='300' />
                </Link>
                {!checkIfFavorite(house.id) ?
                  <Link to={`users/${userLogged.id}/favorites`} onClick={e => addToFavorites(house.id, e)} >Add to favorites</Link>
                  : <span>Favorite</span>
                }
              </li>,
            )}
          </ul>
        }
        <p>
        </p>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
