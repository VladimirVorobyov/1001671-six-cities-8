import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import cityReducer from './citiesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(cityReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
