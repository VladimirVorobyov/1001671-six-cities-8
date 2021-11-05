import { combineReducers } from 'redux';
import { sortOffers } from './sort-offers/sort-offers';
import { authorization } from './authorization/authorization';
import { fullOfferReducer } from './full-offer/full-offer';

export enum NameSpace {
  DATA = 'DATA',
  USER = 'USER',
  FULL_OFFER = 'FULL_OFFER'
}

export const rootReducer = combineReducers({
  [NameSpace.DATA]: sortOffers,
  [NameSpace.USER]: authorization,
  [NameSpace.FULL_OFFER]: fullOfferReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
