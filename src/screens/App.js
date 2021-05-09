import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import userActions from '../redux/actions/UserActions';


const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.authenticationReducer.user);

  const logOut = () => {
    dispatch(userActions.logout());
  };
  return (
    <div>
      <Header />
      <div className="col-lg-8 offset-lg-2">
        <h1>Hi {user.name}!</h1>
        <p>You are logged in with React Hooks!!</p>
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
