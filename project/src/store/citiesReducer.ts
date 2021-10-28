import { Actions, ActionType } from './../types/ActionType';
import { State } from '../types/State';
import mapMock from '../mocks/map';
import offers from '../mocks/offers';

const CITY_PARIS = mapMock[0];

const initialState = {
  cities: mapMock,
  offers: offers.filter((item) => item.city === 'Paris'),
  map: CITY_PARIS,
  active:'',
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
        offers: offers.filter((item) => item.city === action.payload),
      };
    case ActionType.MapAction:
      return {
        ...state,
        map: mapMock.find((item) => item.city === action.payload),
      };
    case ActionType.LowToHigh:
      return {
        ...state,
        offers: [...action.payload].sort((a, b) => a.cost - b.cost),
      };
    case ActionType.HighToLow:
      return {
        ...state,
        offers: [...action.payload].sort((a, b) => b.cost - a.cost),
      };
    case ActionType.TopRated:
      return {
        ...state,
        offers: [...action.payload].sort((a, b) => b.rating - a.rating),
      };
    case ActionType.ActiveCard:
      return{
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
