import { AppRoute } from '../components/const';
import Favorites from '../components/favorites/favorites';
import LogIn from '../components/login/login';
import Main from '../components/main/main';
import Page404 from '../components/page404/page404';
import Properties from '../components/properties/properties';
import { Offer, Review } from '../types/types';

export const pages = [
  {
    component: (sortedOffers: Offer[]): JSX.Element => <Main offers={ sortedOffers } />,
    isPrivate: false,
    route: AppRoute.Main,
  },
  {
    component: (): JSX.Element => <LogIn />,
    isPrivate: false,
    route: AppRoute.SignIn,
  },
  {
    component: (offers: Offer[]): JSX.Element => <Favorites offers={ offers } />,
    isPrivate: true,
    route: AppRoute.Favorites,
  },
  {
    component: (offers: Offer[], reviews: Review[]): JSX.Element => <Properties offers={ offers } reviews={ reviews }/>,
    isPrivate: false,
    route: AppRoute.Room,
  },
  {
    component: (): JSX.Element => <Page404 />,
    isPrivate: false,
    route: '',
  },
];
// function Pages({ sortedOffers, offers, reviews }: ConnectedComponentProps): JSX.Element {
//   return [
//     {
//       component: () => <Main offers={ sortedOffers } />,
//       isPrivate: false,
//       route: AppRoute.Main,
//     },
//     {
//       component: () => <LogIn />,
//       isPrivate: false,
//       route: AppRoute.SignIn,
//     },
//     {
//       component: () => <Favorites offers={ offers } />,
//       isPrivate: true,
//       route: AppRoute.Favorites,
//     },
//     {
//       component: () => <Properties offers={ offers } reviews={ reviews }/>,
//       isPrivate: false,
//       route: AppRoute.Room,
//     },
//     {
//       component: () => <Page404 />,
//       isPrivate: false,
//       route: '',
//     },
//   ];
// }

// export { Pages };
// export default connector(Pages);
