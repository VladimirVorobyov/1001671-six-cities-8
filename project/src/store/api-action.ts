import { CommetnDataType } from './../types/comment-data';
import { adaptComments, ServerComments } from './../adapter';
import {
  loadOffersAction,
  requireAuthorizationAction,
  requireLogoutAction,
  redirectToRouteAction,
  detailedOfferAction,
  offersNearbyAction,
  commentsOfferAction,
  emailAction,
  offersFavoritesAction,
  isFavoriteOfferAction
} from './action';
import {
  OffersType,
  OfferType,
  ClientOfferType
} from './../types/offers-type';
import {ThunkActionResult} from '../types/ActionType';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import {AuthData} from '../types/auth-data';
import { Token, saveToken, dropToken } from '../services/token';
import {adaptOfffers,adaptFullOffer} from '../adapter';

export const fullOfferAction =
  (active:number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OfferType>(`/hotels/${active}`);
      dispatch(detailedOfferAction(adaptFullOffer(data)));
    };
export const favoriteOffersAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OffersType>('/favorite');
      dispatch(offersFavoritesAction(adaptOfffers(data)));
    };
export const favoritePushOffersAction =
  (offer:ClientOfferType): ThunkActionResult =>(
    async (dispatch, _getState, api): Promise<void> => {
      const param = offer.isFavorite ? '0':'1';
      const {data} = await api.post<OfferType>(`/favorite/${offer.id}/${param}`);
      dispatch(isFavoriteOfferAction(adaptFullOffer(data)));
    });
export const favoritePopOffersAction =
  (active:number): ThunkActionResult =>(
    async (dispatch, _getState, api): Promise<void> => {
      const {data} = await api.post<OfferType>(`/favorite/${active}/0`);
      dispatch(isFavoriteOfferAction(adaptFullOffer(data)));
    });

export const commentPostAction =
  (commentPost: CommetnDataType, active:string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      const {data} = await api.post<ServerComments>(`/comments/${active}`,commentPost);
      dispatch(commentsOfferAction(adaptComments(data)));
    };

export const commentOfferAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<ServerComments>(`/comments/${active}`);
      dispatch(commentsOfferAction(adaptComments(data)));
    };

export const offerNearbyAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OffersType>(`/hotels/${active}/nearby`);
      dispatch(offersNearbyAction(adaptOfffers(data)));
    };

export const fetchOffersnAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OffersType>(APIRoute.Offers);
      dispatch(loadOffersAction(adaptOfffers(data)));
    };


export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login).then(() => {
      dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
    });
  };

export const loginAction =
      ({ login: email, password }: AuthData): ThunkActionResult =>
        async (dispatch, _getState, api) => {
          const {
            data: { token, email:login },
          } = await api.post<{ token: Token, email:string }>(APIRoute.Login, {
            email,
            password,
          });
          saveToken(token);
          dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
          dispatch(redirectToRouteAction(AppRoute.Favorites));
          dispatch(emailAction(login));
        };

export const logoutAction =
      (): ThunkActionResult => async (dispatch, _getState, api) => {
        api.delete(APIRoute.Logout);
        dropToken();
        dispatch(requireLogoutAction());
        dispatch(redirectToRouteAction(AppRoute.Main));
      };
