import Favorites from '../components/favorites/favorites';
import LogIn from '../components/login/login';
import Main from '../components/main/main';
import Page404 from '../components/page404/page404';
import Properties from '../components/properties/properties';
import { AppRoute } from '../const';

export const pages = [
  {
    component: (): JSX.Element => <Main />,
    isPrivate: false,
    route: AppRoute.Main,
  },
  {
    component: (): JSX.Element => <LogIn />,
    isPrivate: false,
    route: AppRoute.SignIn,
  },
  {
    component: (): JSX.Element => <Favorites />,
    isPrivate: true,
    route: AppRoute.Favorites,
  },
  {
    component: (): JSX.Element => <Properties />,
    isPrivate: false,
    route: AppRoute.Room,
  },
  {
    component: (): JSX.Element => <Page404 />,
    isPrivate: false,
    route: '',
  },
];
