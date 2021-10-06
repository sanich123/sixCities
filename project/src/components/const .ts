export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  Favorites: '/favorites',
  Room: '/offer/:id',
};

export enum AuthorizationStatus {
  AUTH,
  NO_AUTH,
  UNKNOWN,
}
export const authorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO-AUTH',
  UNKNOWN: 'UNKNOWN',
};
