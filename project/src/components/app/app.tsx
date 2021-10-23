import { BrowserRouter, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import Favorites from '../favorites/favorites';
import MainScreen from '../main/main';
import LogIn from '../login/login';
import Properties from '../properties/properties';
import Page404 from '../page404/page404';
import { mockOffers } from '../../mock/offers';
import { mockReviews } from '../../mock/reviews';
import { AppRoute, sortTypes  } from '../const';
import { generateRoutes } from '../../utils/utils';
import { State } from '../../types/reducer';
import { useState } from 'react';

const mapStateToProps = ({ city }: State) => ({
  city,
});

const connector = connect(mapStateToProps);

type ConnectedComponentProps = ConnectedProps<typeof connector>;

function App({ city }: ConnectedComponentProps): JSX.Element {
  const filtredOffers = mockOffers.filter((offer) => offer.city.name === city);
  const [sortClick, setSortClick] = useState('');
  const [sortChange, setSortChange] = useState('Popular');
  if (sortChange === sortTypes.PRICE_LOW) {
    filtredOffers.sort((a, b) => a.price - b.price);
  }
  if (sortChange === sortTypes.PRICE_HIGH) {
    filtredOffers.sort((a, b) => b.price - a.price);
  }
  if (sortChange === sortTypes.TOP_RATED) {
    filtredOffers.sort((a, b) => b.rating - a.rating);
  }
  // if (sortChange === sortTypes.POPULAR) {
  //   filtredOffers;
  // }

  const pages = [
    {
      component: () => (
        <MainScreen
          offers={ filtredOffers }
          setSortClick={setSortClick}
          setSortChange={setSortChange}
          sortClick={sortClick}
          sortChange={sortChange}
        />),
      isPrivate: false,
      route: AppRoute.Main,
    },
    {
      component: () => <LogIn />,
      isPrivate: false,
      route: AppRoute.SignIn,
    },
    {
      component: () => (<Favorites offers={ mockOffers } />),
      isPrivate: true,
      route: AppRoute.Favorites,
    },
    {
      component: () => <Properties offers={ mockOffers } reviews={ mockReviews }/>,
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
