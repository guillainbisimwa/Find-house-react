import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import userActions from '../redux/actions/UserActions';

const Login = () => {
  const [inputs, setInputs] = useState({
    name: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { name, password } = inputs;
  const loggingIn = useSelector(state => state.authenticationReducer.loggedIn);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitted(true);
    if (name && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: '/' } };
      dispatch(userActions.login(name, password, from));
    }
  };

  return (
    <div className="bg-login-bg">
      <div className="bg-white bg-opacity-90 h-screen flex p-0 m-0">
        <form name="form" onSubmit={handleSubmit} className="my-auto mx-auto px-5 sm:px-8 py-8 w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h3 className="intro-x font-bold text-2xl xl:text-3xl text-center p-2">Sign in</h3>
          <div className="intro-x mt-2 mb-5 text-gray-500 text-center">Hello there! Sign in and start managing your system</div>
          <div className="intro-x mt-8">
            <input name="name" value={name} onChange={handleChange} type="email" className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full ${submitted && !name ? 'border-primary' : ''}`} placeholder="Enter your email" />
            {submitted && !name
                        && <div className="text-primary">Email is required</div>}
            <input type="password" name="password" value={password} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full mt-3 ${submitted && !password ? 'border-primary' : ''}`} placeholder="Enter your password" />
            {submitted && !password
                        && <div className="text-primary">Password is required</div>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded-full shadow-2xl focus:outline-none">
              {loggingIn && <span className="spinner-border spinner-border-sm mr-1" />}
              Sign in
            </button>
          </div>
          <Link to="/register" className="flex items-center justify-center text-gray-600 mt-5">Click here to create an account!</Link>

        </form>
      </div>
    </div>
  );
};

export default Login;
