import { BrowserRouter, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch  } from 'react';
import Favorites from '../favorites/favorites';
import Main from '../main/main';
import LogIn from '../login/login';
import Properties from '../properties/properties';
import Page404 from '../page404/page404';
import { mockReviews } from '../../mock/reviews';
import {
  AppRoute,
  sortTypeChanger } from '../const';
import { generateRoutes } from '../../utils/utils';
import { Actions, State } from '../../types/reducer';
import { sortOffers, filterOffers } from '../../store/action';
import { Offer } from '../../types/types';
// import { pages } from '../../utils/pages';

function mapStateToProps({ city, offers, sortName, reviews }: State) {
  return ({
    city, offers, sortName, reviews,
  });
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortedOffers(offers: Offer[]) {
    dispatch(sortOffers(offers));
  },
  onFiltredOffers(offers: Offer[]) {
    dispatch(filterOffers(offers));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function App({ city, offers, onSortedOffers, onFiltredOffers, sortName, reviews }: ConnectedComponentProps): JSX.Element {
  const filtredOffers = offers.filter((offer) => offer.city.name === city);
  onFiltredOffers(filtredOffers);
  const sortedOffers = sortTypeChanger[sortName](filtredOffers);
  onSortedOffers(sortedOffers);

  const pages = [
    {
      component: () => <Main offers={ sortedOffers } />,
      isPrivate: false,
      route: AppRoute.Main,
    },
    {
      component: () => <LogIn />,
      isPrivate: false,
      route: AppRoute.SignIn,
    },
    {
      component: () => <Favorites offers={ offers } />,
      isPrivate: true,
      route: AppRoute.Favorites,
    },
    {
      component: () => <Properties offers={ offers } reviews={ mockReviews }/>,
      isPrivate: false,
      route: AppRoute.Room,
    },
    {
      component: () => <Page404 />,
      isPrivate: false,
      route: '',
    },
  ];

  return (
    <BrowserRouter>
      <Switch>
        { pages.map(({ component, route, isPrivate }) => generateRoutes({ component, route, isPrivate })) }
      </Switch>
    </BrowserRouter>
  );
}

export { App };
export default connector(App);
