import { BrowserRouter, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useState } from 'react';
import Favorites from '../favorites/favorites';
import Main from '../main/main';
import LogIn from '../login/login';
import Properties from '../properties/properties';
import Page404 from '../page404/page404';
import { mockReviews } from '../../mock/reviews';
import { AppRoute, sortByPriceHigh, sortByPriceLow, sortByRating, sortTypes  } from '../const';
import { generateRoutes } from '../../utils/utils';
import { State } from '../../types/reducer';

const mapStateToProps = ({ city, offers }: State) => ({
  city, offers,
});

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function App({ city, offers }: ConnectedComponentProps): JSX.Element {
  const filtredOffers = offers.filter((offer) => offer.city.name === city);
  const [sortChange, setSortChange] = useState('Popular');

  const sortTypeChanger = {
    'Price: low to high': () => sortByPriceLow(filtredOffers),
    'Price: high to low': () => sortByPriceHigh(filtredOffers),
    'Top rated first': () => sortByRating(filtredOffers),
  };

  switch(sortChange) {
    case sortTypes.PRICE_LOW:
      sortTypeChanger['Price: low to high']();break;
    case sortTypes.PRICE_HIGH:
      sortTypeChanger['Price: high to low']();break;
    case sortTypes.TOP_RATED:
      sortTypeChanger['Top rated first']();
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
