import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/reducers';
import MyRoutes from './Route';

ReactDOM.render(
  <Provider store={store}>
    <MyRoutes />
  </Provider>,
  document.getElementById('root'),
);
