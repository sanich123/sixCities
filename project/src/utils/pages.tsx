import Favorites from '../components/favorites/favorites';
import LogIn from '../components/login/login';
import Main from '../components/main/main';
import Page404 from '../components/page404/page404';
import Properties from '../components/properties/properties';
import { AppRoutes } from '../const';

export const pages = [
  {
    component: (): JSX.Element => <Main />,
    isPrivate: false,
    route: AppRoutes.Main,
  },
  {
    component: (): JSX.Element => <LogIn />,
    isPrivate: false,
    route: AppRoutes.SignIn,
  },
  {
    component: (): JSX.Element => <Favorites />,
    isPrivate: true,
    route: AppRoutes.Favorites,
  },
  {
    component: (): JSX.Element => <Properties />,
    isPrivate: false,
    route: AppRoutes.Room,
  },
  {
    component: (): JSX.Element => <Page404 />,
    isPrivate: false,
    route: '',
  },
];
