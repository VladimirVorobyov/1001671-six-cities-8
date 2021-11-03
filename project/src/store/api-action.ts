import { LoadOffers, requireAuthorization, requireLogout,redirectToRoute } from './action';
import { OffersType, ClientOffersType } from './../types/offers-type';
import {ThunkActionResult} from '../types/ActionType';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import {AuthData} from '../types/auth-data';
import { Token, saveToken, dropToken } from '../services/token';

const adapterOfffers = (offers: OffersType): ClientOffersType => offers.map((item) => ({
  id: item.id,
  city: item.city,
  previewImage: item.preview_image,
  images: item.images,
  title: item.title,
  isFavorite: item.is_favorite,
  isPremium: item.is_premium,
  rating: item.rating,
  type: item.type,
  bedrooms: item.bedrooms,
  maxAdults: item.max_adults,
  price: item.price,
  goods: item.goods,
  description: item.description,
  location: item.location,
  host: {
    id: item.host.id,
    name: item.host.name,
    pro: item.host.is_pro,
    avatar: item.host.avatar_url,
  },
}));

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
