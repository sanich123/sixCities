export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const DEFAULT_CITY = 'Paris';
export const DEFAULT_SORT = 'Popular';

export const FAVORITES = 'favorites';
export const PROPERTIES = 'properties';
export const MAIN = 'main';

export const CheckLogin = {
  Password: 'Пароль должен состоять минимум из одной буквы и одной цифры',
  Email: 'Email должен соответствовать требованиям, предъявляемым к адресам email',
};

export const Patterns = {
  Password: /([A-zА-я]{1}[0-9]{1})|([0-9]{1}[A-zА-я]{1})/,
  Email: /^[A-z0-9._:$!%-]+@[A-z0-9.-]+.+.[A-z]{2,4}$/,
};

export const FailMessages = {
  AuthFailMessage: 'Не забудьте авторизоваться!',
  AuthFailRequest: 'Не удалось отправить логин и пароль на сервер, отсутствует соединение с интернет',
  CommentPostError: 'Не удалось отправить комментарий, неполадки с сетью',
  NetworkError: 'Невозможно выполнить действие, проверьте соединение с сетью интернет',
  AuthFailFavorites: 'Добавлять в избранное могут только авторизованные пользователи',
  NearPlacesFailFavorites: 'Добавлять отель в избранное можно на главной странице приложения и на странице самого отеля',
  ServerFailResponse: 'Request failed with status code 400',
  AuthFailResponse: 'Email не проходит валидацию на сервере',
};

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

export const LeafletUrls = {
  Layer: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  MarkerDefault: 'img/pin.svg',
  MarkerCurrent: 'img/pin-active.svg',
};

export const sortTypes = {
  Popular: 'Popular',
  PriceLow: 'Price: low to high',
  PriceHigh: 'Price: high to low',
  TopRated: 'Top rated first',
};
