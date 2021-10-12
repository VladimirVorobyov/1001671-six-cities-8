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
  commentsId : CommentOfferType[],
  cost: string,
  favorites:boolean,
};

export type OffersType = OfferType[];
