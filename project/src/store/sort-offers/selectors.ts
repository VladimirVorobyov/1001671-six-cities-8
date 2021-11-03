import { State } from '../../types/State';
import { MapType, ClientOffersType } from '../../types/offers-type';
import { NameSpace } from '../root-reducer';

export const getMap = (state: State): MapType | undefined => state[NameSpace.data].map;
export const getOffers = (state: State): ClientOffersType =>
  state[NameSpace.data].offers;
export const getOffersLoad = (state: State): ClientOffersType =>
  state[NameSpace.data].offersLoad;
export const getActive = (state: State): number => state[NameSpace.data].active;
