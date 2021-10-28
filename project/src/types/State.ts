import {OffersType,MapsType,MapType} from '../types/offers-type';

export type State = {
  cities: MapsType;
  offers: OffersType;
  map: MapType | undefined;
  active:string,
};
