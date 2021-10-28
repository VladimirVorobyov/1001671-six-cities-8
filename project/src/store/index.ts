import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import cityReducer from './citiesReducer';


const store = createStore(cityReducer, applyMiddleware(thunk));

export default store;
