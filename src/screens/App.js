import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import houseActions from '../redux/actions/HouseActions';
import userActions from '../redux/actions/UserActions';


const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.authenticationReducer.user);
  const houses = useSelector(state => state.houseReducer);

  useEffect(() => {
    dispatch(houseActions.getAllHouses());
  }, []);

  const logOut = () => {
    dispatch(userActions.logout());
  };

  return (
    <div>
      <Header />
      <div className="col-lg-8 offset-lg-2">
        <h1>Hi {user.name}!</h1>
        <p>You are logged in with React Hooks!!</p>
        {houses.loading && <em>Loading houses...</em>}
        {houses.error && <span className="text-danger">ERROR: {houses.error}</span>}
        {houses.houses && <em>All houses...</em>}
        {houses.houses &&
                <ul>
                  {houses.houses.map(house =>
                    <li key={house.id}>
                      {`${house.about} - `}
                      {`${house.owner}`}
                      <img src={house.picture} alt={house.owner} width='300' />
                    </li>,
                  )}
                </ul>
        }
        <p>
          <Link to="/login" onClick={logOut}>Logout</Link>
        </p>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
