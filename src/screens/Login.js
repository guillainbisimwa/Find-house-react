import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import userActions from '../redux/actions/UserActions';

const Login = () => {
  const [inputs, setInputs] = useState({
    name: 'gu@me.com',
    password: '12345',
  });
  const [submitted, setSubmitted] = useState(false);
  const { name, password } = inputs;
  const loggingIn = useSelector(state => state.authenticationReducer.loggedIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // // reset login status
  // useEffect(() => {
  //   dispatch(userActions.logout());
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (name && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: '/' } };
      dispatch(userActions.login(name, password, from));
      console.log(submitted);
    }
  };

  return (
    <form name="form" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-medium leading-none mt-3">Sign in</h3>
      <div className="font-normal">Hello there! Sign in and start managing your system</div>
      <input name="name" value={name} onChange={handleChange} id="regular-form-2" type="email" className="form-control form-control-rounded" placeholder="Enter your email"></input>
      <input type="password" name="password" value={password} onChange={handleChange} id="regular-form-2" className="form-control form-control-rounded border-theme-12" placeholder="Enter your password"></input>
      <button className="btn btn-rounded-warning w-24 mr-1 mb-2">
        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
        Sign in
      </button>
      <Link to="/register" className="btn btn-link">Create an account here</Link>
    </form>
  );
};

export default Login;
