import { State } from '../../types/State';
import {
  ClientOfferType,
  ClientOffersType,
  CommentsOfferType
} from '../../types/offers-type';
import { NameSpace } from '../root-reducer';

export const getFullOffer = (state: State): ClientOfferType => state[NameSpace.fullOffer].fullOffer;
export const getNearby = (state: State): ClientOffersType =>
  state[NameSpace.fullOffer].offersNearby;
export const getComments = (state: State): CommentsOfferType =>
  state[NameSpace.fullOffer].comments;
