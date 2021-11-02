import { AuthorizationStatus } from './../const';
import { ClientOffersType, MapsType, MapType } from '../types/offers-type';

export type State = {
  cities: MapsType;
  offers: ClientOffersType;
  map: MapType | undefined;
  active: number;
  authorizationStatus: AuthorizationStatus;
  offersLoad: ClientOffersType;
  isDataLoaded: boolean;
};
