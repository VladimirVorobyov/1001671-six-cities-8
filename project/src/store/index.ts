import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import cityReducer from './citiesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createAPI} from '../services/api';
import { requireAuthorization } from './action';
import {AuthorizationStatus} from '../const';
import { redirect } from './redirect';

const api = createAPI(() =>store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));

const store = createStore(
  cityReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);


export default store;
