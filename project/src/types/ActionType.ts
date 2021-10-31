import { AuthorizationStatus } from './../const';
import { OffersType } from '../types/offers-type';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from './State';

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
}

export type LoadOffersType = {
  type: ActionType.LoadOffers;
  payload: OffersType;
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
  payload: OffersType;
};

export type HighToLowActionType = {
  type: ActionType.HighToLow;
  payload: OffersType;
};

export type TopRatedActionType = {
  type: ActionType.TopRated;
  payload: OffersType;
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
  | LoadOffersType;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
    R,
    State,
    AxiosInstance,
    Actions
  >;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
