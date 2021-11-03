import {
  OffersType,
  OfferType,
  ClientOffersType,
  ClientOfferType,
  CommentsOfferType
} from './types/offers-type';

export const adapterFullOffer = (offer: OfferType): ClientOfferType => ({
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

export const adapterOfffers = (offers: OffersType): ClientOffersType =>
  offers.map((item) => ({
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

export type ServeUserComment = {
    'avatar_url': string,
    id: 4,
    'is_pro': boolean,
    name: string,
}

export type ServerComment = {
  comment: string
  date: string,
  id: number,
  rating: number,
  user: ServeUserComment
}
export type ServerComments = ServerComment[];

export const commentAdapter = (comments: ServerComments): CommentsOfferType => comments.map((item) => ({
  id: item.id,
  imgAutor: item.user.avatar_url,
  rating: item.rating,
  date: item.date,
  description: item.comment,
  autor: item.user.name,
  isPro: item.user.is_pro,
  autorId: item.user.id,
}));
