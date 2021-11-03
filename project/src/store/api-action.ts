import { commentAdapter, ServerComments } from './../adapter';
import {
  LoadOffers,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  fullOffer,
  offerNearby,
  commentsOffer
} from './action';
import {
  OffersType,
  OfferType
} from './../types/offers-type';
import {ThunkActionResult} from '../types/ActionType';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import {AuthData} from '../types/auth-data';
import { Token, saveToken, dropToken } from '../services/token';
import {adapterOfffers,adapterFullOffer} from '../adapter';

export const fullOfferAction =
  (active:number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OfferType>(`/hotels/${active}`);
      dispatch(fullOffer(adapterFullOffer(data)));
    };
export const offerCommentsAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OfferType>(`/hotels/${active}`);
      dispatch(fullOffer(adapterFullOffer(data)));
    };
export const commentOfferAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<ServerComments>(`/comments/${active}`);
      dispatch(commentsOffer(commentAdapter(data)));
    };

export const offerNearbyAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OffersType>(`/hotels/${active}/nearby`);
      dispatch(offerNearby(adapterOfffers(data)));
    };

export const fetchOffersnAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OffersType>(APIRoute.Offers);
      dispatch(LoadOffers(adapterOfffers(data)));
    };


export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login).then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    });
  };

export const loginAction =
      ({ login: email, password }: AuthData): ThunkActionResult =>
        async (dispatch, _getState, api) => {
          const {
            data: { token },
          } = await api.post<{ token: Token }>(APIRoute.Login, {
            email,
            password,
          });
          saveToken(token);
          dispatch(requireAuthorization(AuthorizationStatus.Auth));
          dispatch(redirectToRoute(AppRoute.Favorites));
        };

export const logoutAction =
      (): ThunkActionResult => async (dispatch, _getState, api) => {
        api.delete(APIRoute.Logout);
        dropToken();
        dispatch(requireLogout());
      };
