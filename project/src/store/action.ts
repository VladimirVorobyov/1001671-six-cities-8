import {
  MapActionType,
  ActionType,
  CityActionType,
  LowToHighActionType,
  HighToLowActionType,
  TopRatedActionType,
  ActiveCardType,
  AuthorizationType,
  LogoutType,
  LoadOffersType
} from '../types/ActionType';
import { OffersType } from '../types/offers-type';
import { AuthorizationStatus } from '../const';

export const LoadOffers = (payload: OffersType): LoadOffersType => ({
  type: ActionType.LoadOffers,
  payload,
});

export const requireAuthorization = (
  payload: AuthorizationStatus,
): AuthorizationType => ({
  type: ActionType.RequireAuthorization,
  payload,
});

export const requireLogout = (): LogoutType => ({
  type: ActionType.RequireLogout,
});

export const ActiveCard = (payload: number): ActiveCardType => ({
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

