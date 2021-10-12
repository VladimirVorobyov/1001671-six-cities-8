import { nanoid } from 'nanoid';
import { CommentsOfferType } from '../types/offers-type';
import avatar1 from '../img/avatar-angelina.jpg';
import avatar2 from '../img/avatar-max.jpg';

const comments: CommentsOfferType = [{
  id: nanoid(),
  Autor: 'Anna',
  imgAutor: avatar1,
  rating:4,
  date: 'November 2020',
  description:'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
},
{
  id: nanoid(),
  Autor: 'Max',
  imgAutor: avatar2,
  rating:5,
  date: 'April 2019',
  description:'The building is green and from 18th century.',
},
{
  id: nanoid(),
  Autor: 'Ben',
  imgAutor: avatar1,
  rating:2,
  date: 'October 2020',
  description:'crazy,bad',
},
{
  id: nanoid(),
  Autor: 'Fill',
  imgAutor: avatar1,
  rating:5,
  date: 'June 2020',
  description:'Greet, thank you',
},
];

export default comments;
