/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = RouteProps => {
  const { component: Component, ...rest } = RouteProps;

  const render = props => {
    if (!localStorage.getItem('user')) {
      return <Redirect to="/login" />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

export default PrivateRoute;
