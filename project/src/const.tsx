export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id?',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  FullOffer = '/hotels/: id',
}

export const adaptTypeHouse = (house:string):string=> {
  switch(house){
    case 'apartment': return  'Apartment';
    case 'room': return 'Private Room';
    case 'house': return 'House';
    default: return 'Hotel';
  }
};
