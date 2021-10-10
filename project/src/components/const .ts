export const AppRoute = {
  MAIN: '/',
  SIGNIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export enum AuthorizationStatus {
  AUTH,
  NO_AUTH,
  UNKNOWN,
}
