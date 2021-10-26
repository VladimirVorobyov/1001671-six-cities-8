export type CommentOfferType = {
  id: string,
  imgAutor: string,
  rating:number,
  date: string,
  description:string,
  Autor:string,
}

export type CommentsOfferType = CommentOfferType[];

export type OfferType = {
  id: string,
  city:string,
  name:string,
  img:string,
  premium:boolean,
  type:string,
  rating:number,
  description: string[],
  bedrooms: string,
  adults: string,
  things:string[],
  fullImg:string[],
  nameBoss: string,
  imgBoss: string,
  comments : CommentOfferType[],
  cost: string,
  favorites:boolean,
  lat:number,
  lng: number,
};

export type OffersType = OfferType[];
export type MapType = Pick<OfferType, 'city' | 'lat' | 'lng'> & {
  zoom: number;
  active: boolean;
  countOffer: number;
};
export type MapsType = MapType[];
