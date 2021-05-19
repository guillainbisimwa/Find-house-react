import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import authentication from './AuthentificationReducer';
import notification from './NotificationReducer';
import registration from './RegistrationReducer';
import house from './HouseReducer';
import favorite from './FavoriteReducer';

const mainReducer = combineReducers({
  authenticationReducer: authentication,
  notificationReducer: notification,
  registrationReducer: registration,
  houseReducer: house,
  favoriteReducer: favorite,
});

const store = createStore(mainReducer, applyMiddleware(thunk));

export default store;
