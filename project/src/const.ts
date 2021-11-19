import { Offer } from './types/types';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY = 'Paris';
export const DEFAULT_SORT = 'Popular';
export const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться!';
export const AUTH_FAIL_REQUEST = 'Не удалось отправить логин и пароль на сервер, отсутствует соединение с интернет';
export const COMMENT_POST_ERROR = 'Не удалось отправить комментарий, неполадки с сетью';
export const NETWORK_ERROR = 'Не удалось загрузить предложения из-за неполадок с сетью';
export const FAVORITES_AUTH_ERROR = 'Добавлять в избранное могут только авторизованные пользователи';
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
  Layer: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  MarkerDefault: 'img/pin.svg',
  MarkerCurrent: 'img/pin-active.svg',
};

export const FAVORITES = 'favorites';
export const PROPERTIES = 'properties';
export const MAIN = 'main';

export const sortTypes = {
  Popular: 'Popular',
  PriceLow: 'Price: low to high',
  PriceHigh: 'Price: high to low',
  TopRated: 'Top rated first',
} as const;

export const sortByPriceLow = (array: Offer[]): Offer[] => array.slice().sort((priceA, priceB) => priceA.price - priceB.price);
export const sortByPriceHigh = (array: Offer[]): Offer[] => array.slice().sort((priceA, priceB) => priceB.price - priceA.price);
export const sortByRating = (array: Offer[]): Offer[] => array.slice().sort((ratingA, ratingB) => ratingA.rating - ratingB.rating);

export const sortTypeChanger = {
  [sortTypes.PriceLow]: (offers: Offer[]): Offer[] => sortByPriceLow(offers),
  [sortTypes.PriceHigh]: (offers: Offer[]): Offer[]  => sortByPriceHigh(offers),
  [sortTypes.TopRated]: (offers: Offer[]): Offer[]  => sortByRating(offers),
  [sortTypes.Popular]: (offers: Offer[]): Offer[]  => offers,
};

