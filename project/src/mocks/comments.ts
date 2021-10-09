import { nanoid } from 'nanoid';
import { CommentsOfferType } from '../types/offers-type';

const comments: CommentsOfferType = [{
  id: nanoid(),
  imgAutor: 'Anna',
  rating:4,
  date: 'November 2020',
  description:'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
},
{
  id: nanoid(),
  imgAutor: 'Max',
  rating:5,
  date: 'April 2019',
  description:'The building is green and from 18th century.',
},
{
  id: nanoid(),
  imgAutor: 'Ben',
  rating:2,
  date: 'October 2020',
  description:'crazy,bad',
},
{
  id: nanoid(),
  imgAutor: 'Fill',
  rating:5,
  date: 'June 2020',
  description:'Greet, thank you',
},
];

export default comments;
