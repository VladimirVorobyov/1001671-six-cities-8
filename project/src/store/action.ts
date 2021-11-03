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
  LoadOffersType,
  RedirectToRouteType,
  EmailUserType
} from '../types/ActionType';
import { ClientOffersType } from '../types/offers-type';
import { AuthorizationStatus, AppRoute } from '../const';

export const emailAction = (payload: string): EmailUserType => ({
  type: ActionType.EmailUser,
  payload,
});

export const redirectToRoute = (payload: AppRoute): RedirectToRouteType => ({
  type: ActionType.RedirectToRoute,
  payload,
});

export const LoadOffers = (payload: ClientOffersType): LoadOffersType => ({
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

export const LowToHighAction = (payload: ClientOffersType): LowToHighActionType => ({
  type: ActionType.LowToHigh,
  payload,
});

export const HighToLowAction = (payload: ClientOffersType): HighToLowActionType => ({
  type: ActionType.HighToLow,
  payload,
});

export const TopRatedAction = (payload: ClientOffersType): TopRatedActionType => ({
  type: ActionType.TopRated,
  payload,
});

