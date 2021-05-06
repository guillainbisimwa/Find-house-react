import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './screens/App';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
