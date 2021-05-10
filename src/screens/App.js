import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
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

  return (
    <div>
      <Header user={userLogged} />
      <Main userLogged={userLogged} houses={houses} myFavorites={myFavorites} />
      <Footer />
    </div>
  );
};

export default App;
