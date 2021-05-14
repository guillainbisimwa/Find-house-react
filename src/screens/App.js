import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Main from '../components/Main';
import houseActions from '../redux/actions/HouseActions';

const App = () => {
  const dispatch = useDispatch();

  const houses = useSelector(state => state.houseReducer);
  const favorites = useSelector(state => state.favoriteReducer);
  const userLogged = JSON.parse(localStorage.getItem('user'));

  let myFavorites = [];

  if (houses.houses !== undefined && favorites.favorites !== undefined) {
    // eslint-disable-next-line max-len
    myFavorites = houses.houses.filter(elm1 => favorites.favorites.map(elm => JSON.stringify(elm.house_id)).includes(JSON.stringify(elm1.id)));
    for (let index = 0; index < myFavorites.length; index += 1) {
      const idFavorite = favorites.favorites.find(f => f.house_id === myFavorites[index].id);
      myFavorites[index].id_favorite = idFavorite.id;
    }
  }

  useEffect(() => {
    dispatch(houseActions.getAllHouses());
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(houseActions.getAllFavorites(user.id));
  }, []);

  return (
    <div>
      <Header user={userLogged} />
      <Main userLogged={userLogged} houses={houses} myFavorites={myFavorites} />
    </div>
  );
};

export default App;
