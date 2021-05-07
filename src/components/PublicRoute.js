import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = (RouteProps) => {
  const { component: Component, restricted = false, ...rest } = RouteProps;

  const render = (props) => {
    if (localStorage.getItem('user') && restricted) {
      return <Redirect to='/' />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} render={render} />;
};

export default PublicRoute;