export enum AppRoute{
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id?',
  DevArtist = '/dev-artist',
  DevGenre = '/dev-genre',
}

export enum  AuthorizationStatus{
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
