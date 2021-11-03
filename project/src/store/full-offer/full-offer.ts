import { ActionType, Actions } from '../../types/ActionType';
import { FullOfferType } from '../../types/State';

const initialState: FullOfferType = {
  fullOffer: {
    id: 0,
    city: {
      name: 'string',
      location: {
        latitude: 1,
        longitude: 1,
        zoom: 1,
      },
    },
    previewImage: 'string',
    images: [],
    title: 'string',
    isFavorite: false,
    isPremium: false,
    rating: 1,
    type: 'string',
    bedrooms: 1,
    maxAdults: 1,
    price: 1,
    goods: [],
    description: 'string',
    location: {
      latitude: 1,
      longitude: 1,
      zoom: 1,
    },
    host: {
      id: 0,
      name: 'offer.host.name',
      pro: false,
      avatar: 'offer.host.avatar_url',
    },
  },
  offersNearby: [],
  comments:[],
};

const fullOfferReducer = (
  state = initialState,
  action: Actions,
): FullOfferType => {
  switch (action.type) {
    case ActionType.ClientOffer:
      return {
        ...state,
        fullOffer: action.payload,
      };
    case ActionType.OffersNearby:
      return {
        ...state,
        offersNearby: action.payload,
      };
    case ActionType.Commnets:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export { fullOfferReducer };
