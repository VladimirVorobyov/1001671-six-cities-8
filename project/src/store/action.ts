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
  EmailUserType,
  fullOfferType,
  offersNearbyType,
  CommentsType,
  offersFavoriteType,
  IsFavoriteType
} from '../types/ActionType';
import {
  ClientOffersType,
  ClientOfferType,
  CommentsOfferType
} from '../types/offers-type';
import { AuthorizationStatus, AppRoute } from '../const';

export const isFavoriteOfferAction = (payload: ClientOfferType): IsFavoriteType => ({
  type: ActionType.isFavorite,
  payload,
});

export const commentsOfferAction = (payload: CommentsOfferType): CommentsType => ({
  type: ActionType.Commnets,
  payload,
});
export const offersFavoritesAction = (payload: ClientOffersType): offersFavoriteType => ({
  type: ActionType.Favorites,
  payload,
});

export const offersNearbyAction = (payload: ClientOffersType): offersNearbyType => ({
  type: ActionType.OffersNearby,
  payload,
});
export const detailedOfferAction = (payload: ClientOfferType): fullOfferType => ({
  type: ActionType.ClientOffer,
  payload,
});

export const emailAction = (payload: string): EmailUserType => ({
  type: ActionType.EmailUser,
  payload,
});

export const redirectToRouteAction = (payload: AppRoute): RedirectToRouteType => ({
  type: ActionType.RedirectToRoute,
  payload,
});

export const loadOffersAction = (payload: ClientOffersType): LoadOffersType => ({
  type: ActionType.LoadOffers,
  payload,
});

export const requireAuthorizationAction = (
  payload: AuthorizationStatus,
): AuthorizationType => ({
  type: ActionType.RequireAuthorization,
  payload,
});

export const requireLogoutAction = (): LogoutType => ({
  type: ActionType.RequireLogout,
});

export const activeCardAction = (payload: number): ActiveCardType => ({
  type: ActionType.ActiveCard,
  payload,
});

export const mapAction = (payload: string): MapActionType => ({
  type: ActionType.MapAction,
  payload,
});

export const cityAction = (payload: string): CityActionType => ({
  type: ActionType.CityAction,
  payload,
});

export const lowToHighAction = (payload: ClientOffersType): LowToHighActionType => ({
  type: ActionType.LowToHigh,
  payload,
});

export const highToLowAction = (payload: ClientOffersType): HighToLowActionType => ({
  type: ActionType.HighToLow,
  payload,
});

export const topRatedAction = (payload: ClientOffersType): TopRatedActionType => ({
  type: ActionType.TopRated,
  payload,
});

