import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import authentication from './AuthentificationReducer';
import notification from './NotificationReducer';
import registration from './RegistrationReducer';

const loggerMiddleware = createLogger();

const mainReducer = combineReducers({
  authenticationReducer: authentication,
  notificationReducer: notification,
  registrationReducer: registration,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
