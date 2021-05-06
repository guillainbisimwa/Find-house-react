import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch, Route, Router, Redirect,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import history from './helpers/History';
import notificationActions from './redux/actions/NotificationActions';
import App from './screens/App';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Routes = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      console.log(location, action);
      dispatch(notificationActions.clear());
    });
  }, []);

  return (
    <>
    {
      alert
        && <div className={`alert ${alert.type}`}>{alert}</div>
    }
    <Router history={history}>
      <Switch>
          <PrivateRoute exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Signup} />
          <Redirect from="*" to="/" />
      </Switch>
    </Router>
    </>
  );
};
export default Routes;
