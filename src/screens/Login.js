import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import userActions from '../redux/actions/UserActions';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: '/' } };
      dispatch(userActions.login(username, password, from));
    }
  }
  return (
    <div>
      <h3 className="text-2xl font-medium leading-none mt-3">Sign in</h3>
      <div className="font-normal">Hello there! Sign in and start managing your system</div>
      <input id="regular-form-2" type="email" className="form-control form-control-rounded" placeholder="Enter your email"></input>
      <input id="regular-form-2" type="password" className="form-control form-control-rounded border-theme-12" placeholder="Enter your password"></input>
      <button className="btn btn-rounded-warning w-24 mr-1 mb-2"> Sign in </button>
      <div className="font-normal">Create an account here</div>
    </div>
  );
};

export default Login;
