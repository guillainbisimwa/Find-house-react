import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/reducers';
import Routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
   <Routes />
  </Provider>,
  document.getElementById('root'),
);
