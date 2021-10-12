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

export const Marks = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

export const Cities = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];

export const dateFormatter = (date: string): string => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[(new Date(date).getMonth())]} ${new Date(date).getFullYear()}`;
};
