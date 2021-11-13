import { CommetnDataType } from './../types/comment-data';
import { toast } from 'react-toastify';
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
  isFavoriteOfferAction,
  mapAction
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

const commentError = 'Ошибка БРАТ!!!';
const cityDefault = 'Paris';

export const fullOfferAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data } = await api.get<OfferType>(`/hotels/${active}`);
        dispatch(detailedOfferAction(adaptFullOffer(data)));
      } catch (error) {
        toast.info(commentError);
      }
    };

export const favoriteOffersAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data } = await api.get<OffersType>('/favorite');
        dispatch(offersFavoritesAction(adaptOfffers(data)));
      } catch (error) {
        toast.info(commentError);
      }
    };
export const favoritePushOffersAction =
  (offer:ClientOfferType): ThunkActionResult =>(
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const param = offer.isFavorite ? '0' : '1';
        const { data } = await api.post<OfferType>(
          `/favorite/${offer.id}/${param}`,
        );
        dispatch(isFavoriteOfferAction(adaptFullOffer(data)));
      } catch (error) {
        toast.info(commentError);
      }
    });
export const favoritePopOffersAction =
  (active:number): ThunkActionResult =>(
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data } = await api.post<OfferType>(`/favorite/${active}/0`);
        dispatch(isFavoriteOfferAction(adaptFullOffer(data)));
      } catch (error) {
        toast.info(commentError);
      }
    });

export const commentPostAction =
  (commentPost: CommetnDataType, active:string): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      try{
        const {data} = await api.post<ServerComments>(`/comments/${active}`,commentPost);
        dispatch(commentsOfferAction(adaptComments(data)));
      }
      catch(error){
        toast.info(commentError);}};

export const commentOfferAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data } = await api.get<ServerComments>(`/comments/${active}`);
        dispatch(commentsOfferAction(adaptComments(data)));
      } catch (error) {
        toast.info(commentError);
      }
    };

export const offerNearbyAction =
  (active: number): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data } = await api.get<OffersType>(`/hotels/${active}/nearby`);
        dispatch(offersNearbyAction(adaptOfffers(data)));
      } catch (error) {
        toast.info(commentError);
      }
    };

export const fetchOffersnAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api): Promise<void> => {
      try {
        const { data } = await api.get<OffersType>(APIRoute.Offers);
        dispatch(loadOffersAction(adaptOfffers(data)));
      } catch (error) {
        toast.info(commentError);
      }
    };


export const checkAuthAction =
  (): ThunkActionResult =>
    async (dispatch, _getState, api) => {
      try{
        const { data } = await api.get<{ token: Token; email: string }>(
          APIRoute.Login,
        );
        dispatch(emailAction(data.email));
        dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
      }
      catch(error){
        dispatch(requireAuthorizationAction(AuthorizationStatus.NoAuth));
      }};

export const loginAction =
      ({ login: email, password }: AuthData): ThunkActionResult =>
        async (dispatch, _getState, api) => {
          try {
            const {
              data: { token, email: login },
            } = await api.post<{ token: Token; email: string }>(
              APIRoute.Login,
              {
                email,
                password,
              },
            );
            saveToken(token);
            dispatch(requireAuthorizationAction(AuthorizationStatus.Auth));
            dispatch(redirectToRouteAction(AppRoute.Favorites));
            dispatch(emailAction(login));
            dispatch(fetchOffersnAction());
            dispatch(mapAction(cityDefault));
          } catch (error) {
            toast.info(commentError);
          }
        };

export const logoutAction =
      (): ThunkActionResult => async (dispatch, _getState, api) => {
        try {
          api.delete(APIRoute.Logout);
          dropToken();
          dispatch(requireLogoutAction());
          dispatch(redirectToRouteAction(AppRoute.Main));
          dispatch(fetchOffersnAction());
          dispatch(mapAction(cityDefault));
        } catch (error) {
          toast.info(commentError);
        }
      };
