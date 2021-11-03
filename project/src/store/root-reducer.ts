import { combineReducers } from 'redux';
import { sortOffers } from './sort-offers/sort-offers';
import { authorization } from './authorization/authorization';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: sortOffers,
  [NameSpace.user]: authorization,
});

export type RootState = ReturnType<typeof rootReducer>;
