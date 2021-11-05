import { adaptComments, ServerComments } from './../adapter';
import {
  loadOffersAction,
  requireAuthorizationAction,
  requireLogoutAction,
  redirectToRouteAction,
  detailedOfferAction,
  offersNearbyAction,
  commentsOfferAction,
  emailAction
} from './action';
import {
  OffersType,
  OfferType
} from './../types/offers-type';
import {ThunkActionResult} from '../types/ActionType';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import {AuthData} from '../types/auth-data';
import { Token, saveToken, dropToken } from '../services/token';
import {adaptOfffers,adaptFullOffer} from '../adapter';
import browserHistory from '../browser-history';

export const fullOfferAction =
  (active:number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OfferType>(`/hotels/${active}`);
      dispatch(detailedOfferAction(adaptFullOffer(data)));
    };
export const offerCommentsAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OfferType>(`/hotels/${active}`);
      dispatch(detailedOfferAction(adaptFullOffer(data)));
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
        browserHistory.push(AppRoute.Main);
      };
