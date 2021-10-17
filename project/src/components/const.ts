const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
 }

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

export const dateFormatter = (date: string): string => `${ months[(new Date(date).getMonth())] } ${ new Date(date).getFullYear() }`;

export const LeafletUrls = {
  LAYER: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  URL_MARKER_DEFAULT: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  URL_MARKER_CURRENT: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
};

export const Modificator = {
  MAIN: 'main',
  PROPERTIES: 'properties',
  FAVORITES: 'favorites',
};

export const articleClass = (parameter: string): string=> {
  if (parameter === Modificator.PROPERTIES) {
    return 'near-places__card place-card';
  }
  if (parameter === Modificator.FAVORITES) {
    return 'favorites__card place-card';
  }
  return 'cities__place-card place-card';
};

export const imageWrapper = (parameter: string): string => {
  if (parameter === Modificator.PROPERTIES) {
    return 'near-places__image-wrapper place-card__image-wrapper';
  }
  if (parameter === Modificator.FAVORITES) {
    return 'favorites__image-wrapper place-card__image-wrapper';
  }
  return 'cities__image-wrapper place-card__image-wrapper';
};
