import {
  MapActionType,
  ActionType,
  CityActionType,
  LowToHighActionType,
  HighToLowActionType,
  TopRatedActionType,
  ActiveCardType
} from '../types/ActionType';
import { OffersType } from '../types/offers-type';

export const ActiveCard = (payload: string): ActiveCardType => ({
  type: ActionType.ActiveCard,
  payload,
});

export const MapAction = (payload: string): MapActionType => ({
  type: ActionType.MapAction,
  payload,
});

export const CityAction = (payload: string): CityActionType => ({
  type: ActionType.CityAction,
  payload,
});

export const LowToHighAction = (payload: OffersType): LowToHighActionType => ({
  type: ActionType.LowToHigh,
  payload,
});

export const HighToLowAction = (payload: OffersType): HighToLowActionType => ({
  type: ActionType.HighToLow,
  payload,
});

export const TopRatedAction = (payload: OffersType): TopRatedActionType => ({
  type: ActionType.TopRated,
  payload,
});

