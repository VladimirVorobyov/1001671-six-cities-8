type Locaction = {
  latitude: number,
  longitude: number,
  zoom: number
}
type City = {
  name : string,
  location: Locaction,
}

type Host = {
  id: number,
  name: string,
  'is_pro': boolean,
  'avatar_url': string,
}


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
  id: number,
  city: City,
  'preview_image': string,
  images: string[],
  title: string,
  'is_favorite': boolean,
  'is_premium': boolean,
  rating: number,
  type: string,
  bedrooms: number,
  'max_adults': number,
  price: number,
  goods: string[],
  description: string,
  location : Locaction,
  host: Host,
};
export type OffersType = OfferType[];
export type MapType = {
  city: string;
  lat: number;
  lng: number;
  zoom: number;
  active: boolean;
};
export type MapsType = MapType[];
