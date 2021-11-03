import { combineReducers } from 'redux';
import { sortOffers } from './sort-offers/sort-offers';
import { authorization } from './authorization/authorization';
import { fullOfferReducer } from './full-offer/full-offer';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
  fullOffer = 'FULL_OFFER'
}

export const rootReducer = combineReducers({
  [NameSpace.data]: sortOffers,
  [NameSpace.user]: authorization,
  [NameSpace.fullOffer]: fullOfferReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
