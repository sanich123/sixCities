import { Offer } from './types/types';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY = 'Paris';
export const DEFAULT_SORT = 'Popular';
export const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться!';
export const AUTH_FAIL_REQUEST = 'Не удалось отправить логин и пароль на сервер, отсутствует соединение с интернет';
export const COMMENT_POST_ERROR = 'Не удалось отправить комментарий, неполадки с сетью';
export const FAVORITES_GET_ERROR = 'Не удалось загрузить предложения из-за неполадок с сетью';
export const FAVORITES_CHANGE_ERROR = 'Проверьте ваше интернет соединение';

export enum AppRoutes {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
 }

export enum ApiRoutes {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  NearBy = '/nearby',
  Favorites = '/favorite'
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
  URL_MARKER_DEFAULT: 'img/pin.svg',
  URL_MARKER_CURRENT: 'img/pin-active.svg',
};

export const FAVORITES = 'favorites';
export const PROPERTIES = 'properties';
export const MAIN = 'main';

export const sortTypes = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const sortByPriceLow = (array: Offer[]): Offer[] => array.sort((a, b) => a.price - b.price);
export const sortByPriceHigh = (array: Offer[]): Offer[] => array.sort((a, b) => b.price - a.price);
export const sortByRating = (array: Offer[]): Offer[] => array.sort((a, b) => b.rating - a.rating);

export const sortTypeChanger = {
  [sortTypes.PRICE_LOW]: (offers: Offer[]): Offer[] => sortByPriceLow(offers),
  [sortTypes.PRICE_HIGH]: (offers: Offer[]): Offer[]  => sortByPriceHigh(offers),
  [sortTypes.TOP_RATED]: (offers: Offer[]): Offer[]  => sortByRating(offers),
  [sortTypes.POPULAR]: (offers: Offer[]): Offer[]  => offers,
};

