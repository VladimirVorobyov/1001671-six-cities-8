export type OfferType = {
  id: string,
  name:string,
  img:string,
  premium:boolean,
  type:string,
  rating:number,
  description: string,
  bedrooms: string,
  adults: string,
  things:string[],
  fullImg:string[],
  nameBoss: string,
  imgBoss: string,
  commentsId : string[],
  cost: string,
  favorites:boolean,
};

export type OffersType = OfferType[];

export type CommentsOfferType = {
  id: string,
  imgAutor: string,
  rating:number,
  date: string,
  description:string,
}[];

