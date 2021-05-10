import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaUserNinja, FaPlayCircle } from 'react-icons/fa';
import userActions from '../redux/actions/UserActions';


const Header = ({ user }) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className='bg-login-bg'>
      <div className='bg-black bg-opacity-50 h-auto p-5 text-white'>
        <header className="flex mb-10 justify-between">
          <img src='https://github.com/guillainbisimwa/Find-house-api-doc/raw/main/source/images/logo.png' width='150' />
          <div className="mt-5 flex gap-4 md:mx-10 items-center">
            <FaUserNinja />
            <div>{user}</div>
            <Link to="/login" onClick={logOut} className='bg-black bg-opacity-30 py-2 px-6 text-white font-semibold rounded-full shadow-2xl focus:outline-none'>Logout</Link>
          </div>
        </header>
        <div className='pt-10 mt-10 w-2/4'>
          <h3 className="intro-x font-bold text-white text-2xl xl:text-3xl text-left pb-2"> Find your house anywhere</h3>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam,</p>
          <div className='flex gap-4 my-4'>
            <button className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded-full shadow-2xl focus:outline-none">
              Start free
            </button>
            <div className='flex gap-4 mt-4 items-center'>
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
  user: PropTypes.string.isRequired,
};

export default Header;
