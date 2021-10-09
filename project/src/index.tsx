import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import MainScreen from '../src/components/main/main';
import LogIn from './components/login/login';
import Favorites from './components/favorites/favorites';
import Properties from './components/properties/properties';
import Page404 from './components/page404/page404';
import { AppRoute } from './components/const ';

const PlacesCount = {
  PLACES_COUNT: 233,
};

const Cards = [1, 2, 3, 4, 5];

const Pages = [
  {
    component: () => <MainScreen placesCount={PlacesCount.PLACES_COUNT} cards={Cards} />,
    isPrivate: false,
    route: AppRoute.Main,
  },
  {
    component: () => <LogIn />,
    isPrivate: false,
    route: AppRoute.SignIn,
  },
  {
    component: () => <Favorites />,
    isPrivate: true,
    route: AppRoute.Favorites,
  },
  {
    component: () => <Properties />,
    isPrivate: false,
    route: AppRoute.Room,
  },
  {
    component: () => <Page404 />,
    isPrivate: false,
    route: '',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App pages={Pages} />
  </React.StrictMode>,
  document.getElementById('root'),
);
