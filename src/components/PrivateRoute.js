import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (!localStorage.getItem('user')) {
      // not logged in so redirect to login page with the return url
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
    }

    // logged in so return component
    return <Component {...props} />;
  }} />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  roles: PropTypes.func,
  location: PropTypes.object,
};

export default PrivateRoute;
