import { LoadOffers, requireAuthorization, requireLogout } from './action';
import { OffersType } from './../types/offers-type';
import {ThunkActionResult} from '../types/ActionType';
import { APIRoute, AuthorizationStatus } from '../const';
import {AuthData} from '../types/auth-data';
import { Token, saveToken, dropToken } from '../services/token';

export const fetchOffersnAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      const { data } = await api.get<OffersType>(APIRoute.Offers);
      dispatch(LoadOffers(data));
    };


export const checkAuthAction =
  (): ThunkActionResult => async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login).then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
        };

export const logoutAction =
      (): ThunkActionResult => async (dispatch, _getState, api) => {
        api.delete(APIRoute.Logout);
        dropToken();
        dispatch(requireLogout());
      };
