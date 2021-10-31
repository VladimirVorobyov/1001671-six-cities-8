import { AuthorizationStatus } from './../const';
import {OffersType,MapsType,MapType} from '../types/offers-type';

export type State = {
  cities: MapsType;
  offers: OffersType;
  map: MapType | undefined;
  active: number;
  authorizationStatus: AuthorizationStatus;
  offersLoad: OffersType;
  isDataLoaded: boolean;
};
