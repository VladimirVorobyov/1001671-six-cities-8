import { CommentsOfferType, ClientOfferType } from './offers-type';
import { RootState } from './../store/root-reducer';
import { AuthorizationStatus } from './../const';
import { ClientOffersType, MapsType, MapType } from '../types/offers-type';

export type FullOfferType = {
  fullOffer: ClientOfferType;
  offersNearby: ClientOffersType;
  comments:CommentsOfferType;
  isLoding:boolean;
  offersFavorites:ClientOffersType;
};


export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  isDataLoaded: boolean;
  email:string;
};

export type SortOffers = {
  offers: ClientOffersType;
  offersLoad: ClientOffersType;
  cities: MapsType;
  map: MapType | undefined;
  active: number;
};

export type State = RootState;
