import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaUserNinja, FaPlayCircle } from 'react-icons/fa';
import userActions from '../redux/actions/UserActions';
import history from '../helpers/History';

const Header = ({ user }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    history.push('/login');
    dispatch(userActions.logout());
  };

  return (
    <div className="bg-login-bg">
      <div className="bg-black bg-opacity-50 h-auto p-5 text-white">
        <header className="flex mb-10 justify-between">
          <Link to="/">
            <img alt="logo" src="https://github.com/guillainbisimwa/Find-house-api-doc/raw/main/source/images/logo.png" width="150" />
          </Link>
          <div className="mt-5 flex gap-4 md:mx-10 items-center">
            <FaUserNinja />
            <Link to="/">{user.name}</Link>
            <Link to="/favorites">My favorite</Link>
            <Link to="/login" onClick={logOut} className="bg-black bg-opacity-40 py-2 px-6 text-white font-semibold rounded-full shadow-2xl focus:outline-none">Logout</Link>
          </div>
        </header>
        <div className="pt-10 mt-10 w-4/4 sm:w-3/4 md:w-2/4 xl:w-2/4">
          <h2 className="intro-x font-bold text-white text-3xl xl:text-5xl text-left pb-2"> Find your house anywhere</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam,
          </p>
          <div className="flex gap-4 my-4">
            <button type="button" className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded-full shadow-2xl focus:outline-none">
              Start free
            </button>
            <div className="flex gap-4 mt-4 items-center">
              <FaPlayCircle />
              <div>Free video</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Header;
