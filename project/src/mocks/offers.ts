import { OffersType } from '../types/offers-type';
import photo1 from '../img/apartment-01.jpg';
import photo2 from '../img/apartment-02.jpg';
import photo3 from '../img/apartment-03.jpg';
import photo4 from '../img/apartment-small-03.jpg';
import photo5 from '../img/apartment-small-04.jpg';
import photo6 from '../img/room-small.jpg';
import avatar1 from '../img/avatar-angelina.jpg';
import avatar2 from '../img/avatar-max.jpg';
import comments from './comments';

const offers: OffersType = [
  {
    id: '123',
    city: 'Amsterdam',
    name: 'Studio at great location',
    img: photo1,
    premium: false,
    type: 'Apartment',
    rating: 4.8,
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    ],
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    things: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    fullImg: [photo1, photo2, photo3, photo4, photo5, photo6],
    nameBoss: 'Anna',
    imgBoss: avatar1,
    comments: comments,
    cost: '\u20AC120',
    favorites: false,
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
  {
    id: '234',
    city: 'Amsterdam',
    name: 'Greate Hotel',
    img: photo2,
    premium: true,
    type: 'Hotel',
    rating: 3.3,
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    ],
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    things: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    fullImg: [photo1, photo2, photo3, photo4, photo5, photo6],
    nameBoss: 'Max',
    imgBoss: avatar2,
    comments: comments,
    cost: '\u20AC20',
    favorites: false,
    lat: 52.369553943508,
    lng: 4.85309666406198,
  },
  {
    id: '345',
    city: 'Amsterdam',
    name: 'Big House',
    img: photo3,
    premium: false,
    type: 'House',
    rating: 5,
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    ],
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    things: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    fullImg: [photo1, photo2, photo3, photo4, photo5, photo6],
    nameBoss: 'Stive Jobs',
    imgBoss: avatar2,
    comments: comments,
    cost: '\u20AC400',
    favorites: true,
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },
  {
    id: '567',
    city: 'Amsterdam',
    name: 'Beautiful & luxurious studio at great location',
    img: photo1,
    premium: true,
    type: 'Private Room',
    rating: 4.3,
    description: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    ],
    bedrooms: '3 Bedrooms',
    adults: 'Max 4 adults',
    things: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    fullImg: [photo1, photo2, photo3, photo4, photo5, photo6],
    nameBoss: 'Sting',
    imgBoss: avatar2,
    comments: comments,
    cost: '\u20AC310',
    favorites: true,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
];

export default offers;
