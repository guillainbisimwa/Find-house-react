import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import notificationActions from './redux/actions/NotificationActions';
import history from './helpers/History';
import App from './screens/App';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Details from './screens/Details';
import Favorites from './screens/Favorites';

const MyRoutes = () => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    history.listen(({ action, location }) => {
      dispatch(notificationActions.clear());
    });
  }, []);

  return (
    <div className="m-auto w-4/4 lg:w-3/4">
      {
        alert
        && <div className={`alert ${alert.type}`}>{alert}</div>
      }
      <Router history={history}>
        <Switch>
          <PublicRoute restricted component={Signup} path="/register" exact />
          <PublicRoute restricted component={Login} path="/login" exact />
          <PrivateRoute component={App} path="/" exact />
          <PrivateRoute component={Details} path="/details/:id" exact />
          <PrivateRoute component={Favorites} path="/favorites" exact />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default MyRoutes;
