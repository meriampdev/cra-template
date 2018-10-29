import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.css'

import './index.css';
import AppRoutes from './AppRoutes';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
