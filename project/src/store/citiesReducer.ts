import { AuthorizationStatus } from './../const';
import { Actions, ActionType } from './../types/ActionType';
import { State } from '../types/State';
import mapMock from '../mocks/map';
const CITY_PARIS = mapMock[0];

const initialState = {
  offersLoad: [],
  cities: mapMock,
  offers:[],
  map: CITY_PARIS,
  active: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const cityReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CityAction:
      return {
        ...state,
        cities: mapMock.map((item) => {
          item.active = false;
          if (action.payload === item.city) {
            item.active = true;
          }
          return item;
        }),
        offers: state.offersLoad && [...state.offersLoad].filter((item) => item.city.name === action.payload),
      };
    case ActionType.MapAction:
      return {
        ...state,
        map: mapMock.find((item) => item.city === action.payload),
      };
    case ActionType.LowToHigh:
      return {
        ...state,
        offers: [...action.payload].sort((a, b) => a.price - b.price),
      };
    case ActionType.HighToLow:
      return {
        ...state,
        offers: [...action.payload].sort((a, b) => b.price - a.price),
      };
    case ActionType.TopRated:
      return {
        ...state,
        offers: [...action.payload].sort((a, b) => b.rating - a.rating),
      };
    case ActionType.ActiveCard:
      return {
        ...state,
        active: action.payload,
      };
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return { ...state, authorizationStatus: AuthorizationStatus.NoAuth };
    case ActionType.LoadOffers:
      return {
        ...state,
        offersLoad: action.payload,
        offers: [...action.payload].filter(
          (item) => item.city.name === 'Paris',
        ),
      };
    default:
      return state;
  }
};

export default cityReducer;
