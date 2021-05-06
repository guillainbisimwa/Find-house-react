import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

const App = () => {
  const user = useSelector(state => state.authentication.user);

  return (
    <div>
      <Header />
      <div className="col-lg-8 offset-lg-2">
        <h1>Hi {user.firstName}!</h1>
        <p>You are logged in with React Hooks!!</p>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
      <Main />
      <Footer />
    </div>
  );
};

export default App;
