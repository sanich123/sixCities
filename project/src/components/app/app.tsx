import { BrowserRouter, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useState } from 'react';
import Favorites from '../favorites/favorites';
import Main from '../main/main';
import LogIn from '../login/login';
import Properties from '../properties/properties';
import Page404 from '../page404/page404';
import { mockOffers } from '../../mock/offers';
import { mockReviews } from '../../mock/reviews';
import { AppRoute, sortTypes  } from '../const';
import { generateRoutes } from '../../utils/utils';
import { State } from '../../types/reducer';

const mapStateToProps = ({ city }: State) => ({
  city,
});

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function App({ city }: ConnectedComponentProps): JSX.Element {
  const filtredOffers = mockOffers.filter((offer) => offer.city.name === city);
  const [sortChange, setSortChange] = useState('Popular');

  switch(sortChange) {
    case sortTypes.PRICE_LOW:
      filtredOffers.sort((a, b) => a.price - b.price);break;
    case sortTypes.PRICE_HIGH:
      filtredOffers.sort((a, b) => b.price - a.price);break;
    case sortTypes.TOP_RATED:
      filtredOffers.sort((a, b) => b.rating - a.rating);
  }

  const pages = [
    {
      component: () => (
        <Main
          offers={ filtredOffers }
          setSortChange={ setSortChange }
          sortChange={ sortChange }
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
      component: () => <Favorites offers={ mockOffers } />,
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
