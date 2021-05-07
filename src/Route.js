import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import notificationActions from './redux/actions/NotificationActions';
import history from './helpers/History';
import App from './screens/App';
import Login from './screens/Login';
import Signup from './screens/Signup';

const MyRoutes = () => {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(({ action, location }) => {
      // clear alert on location
      console.log(location, action);
      dispatch(notificationActions.clear());
    });
  }, []);

  return (
    <div>
      {
        alert
        && <div className={`alert ${alert.type}`}>{alert}</div>
      }
      <BrowserRouter history={history}>
        <Switch>
          <PublicRoute restricted component={Signup} path="/register" exact />
          <PublicRoute restricted component={Login} path="/login" exact />
          <PrivateRoute component={App} path="/" exact />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default MyRoutes;
