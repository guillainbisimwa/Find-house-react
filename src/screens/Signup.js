import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/UserActions';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [submitted, setSubmitted] = useState(false);
  // const registering = useSelector(state => state.registration.registering);
  const registering = useSelector(state => state.registrationReducer.registering);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitted(true);
    if (user.name && user.email && user.password && user.password_confirmation) {
      dispatch(userActions.register(user));
    }
  };

  return (
    <div className="bg-login-bg">
      <div className="bg-white bg-opacity-90  h-screen flex p-0 m-0">
        <form name="form" onSubmit={handleSubmit} className="my-auto mx-auto px-5 sm:px-8 py-8 w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h3 className="intro-x font-bold text-2xl xl:text-3xl text-center p-2">Registration</h3>
          <div className="form-group mt-3">
            <span>Name</span>
            <input placeholder="Name" type="text" name="name" value={user.name} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full form-control ${submitted && !user.name ? 'border-primary' : ''}`} />
            {submitted && !user.name
                        && <div className="text-primary">Name is required</div>}
          </div>
          <div className="form-group mt-3">
            <span>Email</span>
            <input placeholder="Email" type="text" name="email" value={user.email} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full ${submitted && !user.email ? 'border-primary' : ''}`} />
            {submitted && !user.email
                        && <div className="text-primary">Email is required</div>}
          </div>
          <div className="form-group mt-3">
            <span>Password</span>
            <input placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full ${submitted && !user.password ? 'border-primary' : ''}`} />
            {submitted && !user.password
                        && <div className="text-primary">password is required</div>}
          </div>
          <div className="form-group mt-3">
            <span>Password_confirmation</span>
            <input placeholder="Password confirmation" type="password" name="password_confirmation" value={user.password_confirmation} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full ${submitted && !user.password_confirmation ? 'border-primary' : ''}`} />
            {submitted && !user.password_confirmation
                        && <div className="text-primary">password confirmation is required</div>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded-full shadow-2xl focus:outline-none">
              {registering && <span className="spinner-border spinner-border-sm mr-1" />}
              Register
            </button>
          </div>
          <Link to="/login" className="flex items-center justify-center text-gray-600 mt-5">Cancel</Link>

        </form>
      </div>
    </div>
  );
};

export default Signup;
