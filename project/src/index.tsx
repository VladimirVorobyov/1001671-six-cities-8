import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store/index';
import {ThunkAppDispatch} from './types/ActionType';
import { fetchOffersnAction, checkAuthAction } from './store/api-action';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersnAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
