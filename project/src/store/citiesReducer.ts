import { Actions, ActionType } from './../types/ActionType';
import { State } from '../types/State';
import mapMock from '../mocks/map';
import offers from '../mocks/offers';

const CITY_PARIS = mapMock[0];

const initialState = {
  cities: mapMock,
  offers: offers.filter((item) => item.city === 'Paris'),
  map: CITY_PARIS,
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
    default:
      return state;
  }
};

export default cityReducer;
