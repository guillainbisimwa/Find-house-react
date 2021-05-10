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
    <div className="col-lg-8 offset-lg-2">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} className={`form-control${submitted && !user.name ? ' is-invalid' : ''}`} />
          {submitted && !user.name &&
                        <div className="invalid-feedback">Name is required</div>
          }
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" value={user.email} onChange={handleChange} className={`form-control${submitted && !user.email ? ' is-invalid' : ''}`} />
          {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
          }
        </div>
        <div className="form-group">
          <label>password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} className={`form-control${submitted && !user.password ? ' is-invalid' : ''}`} />
          {submitted && !user.password &&
                        <div className="invalid-feedback">password is required</div>
          }
        </div>
        <div className="form-group">
          <label>password_confirmation</label>
          <input type="password" name="password_confirmation" value={user.password_confirmation} onChange={handleChange} className={`form-control${submitted && !user.password_confirmation ? ' is-invalid' : ''}`} />
          {submitted && !user.password_confirmation &&
                        <div className="invalid-feedback">password_confirmation is required</div>
          }
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
          </button>
          <Link to="/login" className="btn btn-link">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
