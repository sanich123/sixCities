import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import MainScreen from '../src/components/main/main';
import LogIn from './components/login/login';
import Favorites from './components/favorites/favorites';
import Properties from './components/properties/properties';
import Page404 from './components/page404/page404';
import { AppRoute } from './components/const';
import { mockOffers } from './mock/offers';
import { mockReviews } from './mock/reviews';
import { nanoid } from '@reduxjs/toolkit';

const Pages = [
  {
    component: () => (
      <MainScreen
        offers={mockOffers}
      />),
    isPrivate: false,
    route: AppRoute.MAIN,
    key: nanoid(),
  },
  {
    component: () => <LogIn />,
    isPrivate: false,
    route: AppRoute.SIGNIN,
    key: nanoid(),
  },
  {
    component: () => (<Favorites offers={mockOffers}/>),
    isPrivate: true,
    route: AppRoute.FAVORITES,
    key: nanoid(),
  },
  {
    component: () => <Properties offers={mockOffers} reviews={mockReviews}/>,
    isPrivate: false,
    route: AppRoute.ROOM,
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
