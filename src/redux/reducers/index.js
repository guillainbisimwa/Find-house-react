import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import authentication from './AuthentificationReducer';
import notification from './NotificationReducer';
import registration from './RegistrationReducer';
import house from './HouseReducer';
import favorite from './FavoriteReducer';

const loggerMiddleware = createLogger();

const mainReducer = combineReducers({
  authenticationReducer: authentication,
  notificationReducer: notification,
  registrationReducer: registration,
  houseReducer: house,
  favoriteReducer: favorite,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;
