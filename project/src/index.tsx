import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import MainScreen from '../src/components/main/main';
import LogIn from './components/login/login';
import Favorites from './components/favorites/favorites';
import Properties from './components/properties/properties';
import Page404 from './components/page404/page404';
import { AppRoute } from './components/const ';
import { mockOffers } from './components/mock/offers';
import { nanoid } from '@reduxjs/toolkit';

const PlacesCount = {
  PLACES_COUNT: 233,
};

const Pages = [
  {
    component: () => (
      <MainScreen
        placesCount={PlacesCount.PLACES_COUNT}
        offers={mockOffers}
      />),
    isPrivate: false,
    route: AppRoute.Main,
    key: nanoid(),
  },
  {
    component: () => <LogIn />,
    isPrivate: false,
    route: AppRoute.SignIn,
    key: nanoid(),
  },
  {
    component: () => <Favorites />,
    isPrivate: true,
    route: AppRoute.Favorites,
    key: nanoid(),
  },
  {
    component: () => <Properties />,
    isPrivate: false,
    route: AppRoute.Room,
    key: nanoid(),
  },
  {
    component: () => <Page404 />,
    isPrivate: false,
    route: '',
    key: nanoid(),
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App pages={Pages} />
  </React.StrictMode>,
  document.getElementById('root'),
);
