import {
  OffersType,
  OfferType,
  ClientOffersType,
  ClientOfferType,
  CommentsOfferType
} from './types/offers-type';

export const adaptFullOffer = (offer: OfferType): ClientOfferType => ({
  id: offer.id,
  city: offer.city,
  previewImage: offer.preview_image,
  images: offer.images,
  title: offer.title,
  isFavorite: offer.is_favorite,
  isPremium: offer.is_premium,
  rating: offer.rating,
  type: offer.type,
  bedrooms: offer.bedrooms,
  maxAdults: offer.max_adults,
  price: offer.price,
  goods: offer.goods,
  description: offer.description,
  location: offer.location,
  host: {
    id: offer.host.id,
    name: offer.host.name,
    pro: offer.host.is_pro,
    avatar: offer.host.avatar_url,
  },
});

export const adaptOfffers = (offers: OffersType): ClientOffersType =>
  offers.map((offer) =>adaptFullOffer(offer) );

export type ServerUserComment = {
    'avatar_url': string,
    id: number,
    'is_pro': boolean,
    name: string,
}

export type ServerComment = {
  comment: string
  date: string,
  id: number,
  rating: number,
  user: ServerUserComment
}
export type ServerComments = ServerComment[];

export const adaptComments = (comments: ServerComments): CommentsOfferType => comments.map((item) => ({
  id: item.id,
  imgAutor: item.user.avatar_url,
  rating: item.rating,
  date: item.date,
  description: item.comment,
  autor: item.user.name,
  isPro: item.user.is_pro,
  autorId: item.user.id,
}));
