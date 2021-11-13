import { ActionType, Actions } from '../../types/ActionType';
import { SortOffers } from '../../types/State';
import map from '../../map/map';
export const DEFAULT_CITY = map[0];

const initialState: SortOffers = {
  offersLoad: [],
  cities: map,
  offers: [],
  map: DEFAULT_CITY,
  active: 0,
  sortCards:'',
};

const sortOffers = (state = initialState, action: Actions): SortOffers => {
  switch (action.type) {
    case ActionType.SortCardsOffers:
      return{
        ...state,
        sortCards: action.payload,
      };
    case ActionType.isFavorite:
      return {
        ...state,
        offersLoad:state.offersLoad.map((item)=>{
          if(item.id === action.payload.id){
            return action.payload;
          }
          return item;
        }),
        offers:state.offers.map((item)=>{
          if(item.id === action.payload.id){
            return action.payload;
          }
          return item;
        }),
      };
    case ActionType.CityAction:
      return {
        ...state,
        cities: map.map((item) => {
          item.active = false;
          if (action.payload === item.city) {
            item.active = true;
          }
          return item;
        }),
        offers:
          state.offersLoad &&
          [...state.offersLoad].filter(
            (item) => item.city.name === action.payload,
          ),
        sortCards:'',
      };
    case ActionType.MapAction:
      return {
        ...state,
        map: [...map].find((item) => item.city === action.payload),
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
    case ActionType.LoadOffers:
      return {
        ...state,
        offersLoad: action.payload,
        offers: [...action.payload].filter(
          (item) => item.city.name === DEFAULT_CITY.city),
      };
    default:
      return state;
  }
};

export { sortOffers };
