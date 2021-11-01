import browserHistory from '../browser-history';
import { Middleware } from 'redux';
import cityReducer from '../store/citiesReducer';
import { ActionType } from '../types/ActionType';

type Reducer = ReturnType<typeof cityReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action) => {
    if (action.type === ActionType.RedirectToRoute) {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
