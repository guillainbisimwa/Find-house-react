import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authentication from './AuthentificationReducer';
import notification from './NotificationReducer';
import registration from './RegistrationReducer';

const mainReducer = combineReducers({
  authenticationReducer: authentication,
  notificationReducer: notification,
  registrationReducer: registration,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
