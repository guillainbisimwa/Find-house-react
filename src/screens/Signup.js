import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/UserActions';


const Signup = () => {
  const [user, setUser] = useState({
    name: 'guy1',
    email: 'guy1@me.com',
    password: '12345',
    password_confirmation: '12345',
  });
  const [submitted, setSubmitted] = useState(false);
  // const registering = useSelector(state => state.registration.registering);
  const registering = useSelector(state => state.registrationReducer.registering);
  console.log('registr');
  console.log(registering);
  const dispatch = useDispatch();
  console.log();

  // reset login status
  // useEffect(() => {
  //   dispatch(userActions.logout());
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(user => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (user.name && user.email && user.password && user.password_confirmation) {
      dispatch(userActions.register(user));
    }
  };

  return (
    <div className="bg-login-bg">
      <div className='bg-white bg-opacity-90  h-screen flex p-0 m-0'>
        <form name="form" onSubmit={handleSubmit} className='my-auto mx-auto px-5 sm:px-8 py-8 w-full sm:w-3/4 lg:w-2/4 xl:w-auto'>
          <h3 className="intro-x font-bold text-2xl xl:text-3xl text-center p-2">Registration</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full form-control${submitted && !user.name ? ' is-invalid' : ''}`} />
            {submitted && !user.name &&
                        <div className="invalid-feedback">Name is required</div>
            }
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" value={user.email} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full form-control${submitted && !user.email ? ' is-invalid' : ''}`} />
            {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
            }
          </div>
          <div className="form-group">
            <label>password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full form-control${submitted && !user.password ? ' is-invalid' : ''}`} />
            {submitted && !user.password &&
                        <div className="invalid-feedback">password is required</div>
            }
          </div>
          <div className="form-group">
            <label>password_confirmation</label>
            <input type="password" name="password_confirmation" value={user.password_confirmation} onChange={handleChange} className={`bg-gray-200 bg-opacity-10 focus:bg-white rounded-full form-control mb-2 w-full form-control${submitted && !user.password_confirmation ? ' is-invalid' : ''}`} />
            {submitted && !user.password_confirmation &&
                        <div className="invalid-feedback">password_confirmation is required</div>
            }
          </div>
          <div className="flex justify-center">
            <button className="bg-primary py-3 mt-3 px-6 text-white block font-semibold rounded-full shadow-2xl focus:outline-none">
              {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
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
