import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store/index';
import {ThunkAppDispatch} from './types/ActionType';
import { fetchOffersnAction, checkAuthAction,favoriteOffersAction } from './store/api-action';

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersnAction());
(store.dispatch as ThunkAppDispatch)(favoriteOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
