import { AuthorizationStatus } from './../const';
import {
  ClientOffersType,
  ClientOfferType,
  CommentsOfferType
} from '../types/offers-type';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './State';
import { AppRoute } from './../const';

export enum ActionType {
  MapAction = 'MapAction',
  CityAction = 'CityAction',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
  ActiveCard = 'Active Card',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadOffers = 'data/loadOffers',
  RedirectToRoute = 'redirectToRoute',
  EmailUser = 'user/email',
  ClientOffer = 'data/fullOffer',
  OffersNearby = 'data/nearby',
  Commnets = 'data/comments',
  Favorites = 'data/favorites',
  isFavorite = 'is Favorite',
  ChangeFavorite = 'change favorite',
  ClearStore = 'clear store',
  SortCardsOffers= 'sort cards'
}

export type SortCardsOffersType = {
  type: ActionType.SortCardsOffers;
  payload: string;
};

export type ClearStoreType = {
  type: ActionType.ClearStore;
}

export type ChangeFavoriteType = {
  type: ActionType.ChangeFavorite;
  payload: number;
}

export type IsFavoriteType = {
  type: ActionType.isFavorite;
  payload: ClientOfferType;
}

export type CommentsType = {
  type: ActionType.Commnets;
  payload: CommentsOfferType;
};

export type offersFavoriteType = {
  type: ActionType.Favorites;
  payload: ClientOffersType;
};

export type offersNearbyType = {
  type: ActionType.OffersNearby;
  payload: ClientOffersType;
};

export type fullOfferType = {
  type: ActionType.ClientOffer;
  payload: ClientOfferType;
};

export type EmailUserType = {
  type: ActionType.EmailUser;
  payload: string;
};

export type RedirectToRouteType = {
  type: ActionType.RedirectToRoute;
  payload: AppRoute;
};

export type LoadOffersType = {
  type: ActionType.LoadOffers;
  payload: ClientOffersType;
};

export type ActiveCardType = {
  type: ActionType.ActiveCard;
  payload: number;
};

export type MapActionType = {
  type: ActionType.MapAction;
  payload: string;
};

export type CityActionType = {
  type: ActionType.CityAction;
  payload: string;
};

export type LowToHighActionType = {
  type: ActionType.LowToHigh;
  payload: ClientOffersType;
};

export type HighToLowActionType = {
  type: ActionType.HighToLow;
  payload: ClientOffersType;
};

export type TopRatedActionType = {
  type: ActionType.TopRated;
  payload: ClientOffersType;
};

export type AuthorizationType = {
  type: ActionType.RequireAuthorization;
  payload: AuthorizationStatus;
};


export type LogoutType = {
  type: ActionType.RequireLogout;
};

export type Actions =
  | MapActionType
  | CityActionType
  | LowToHighActionType
  | HighToLowActionType
  | TopRatedActionType
  | ActiveCardType
  | AuthorizationType
  | LogoutType
  | LoadOffersType
  | RedirectToRouteType
  | EmailUserType
  | fullOfferType
  | offersNearbyType
  | CommentsType
  | offersFavoriteType
  | IsFavoriteType
  | ChangeFavoriteType
  | ClearStoreType
  | SortCardsOffersType;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
    R,
    State,
    AxiosInstance,
    Actions
  >;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
