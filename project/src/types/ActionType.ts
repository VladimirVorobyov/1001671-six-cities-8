import { OffersType } from '../types/offers-type';

export enum ActionType {
  MapAction = 'MapAction',
  CityAction = 'CityAction',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  TopRated = 'Top rated first',
}

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

export type Actions =
  | MapActionType
  | CityActionType
  | LowToHighActionType
  | HighToLowActionType
  | TopRatedActionType;
