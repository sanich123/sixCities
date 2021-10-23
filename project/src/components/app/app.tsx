import { BrowserRouter, Switch } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import MainScreen from '../main/main';
import LogIn from '../login/login';
import Properties from '../properties/properties';
import Page404 from '../page404/page404';
import { mockOffers } from '../../mock/offers';
import { mockReviews } from '../../mock/reviews';
import { AppRoute  } from '../const';
import { generateRoutes } from '../../utils/utils';
import { State } from '../../types/reducer';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ city }: State) => ({
  city,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function App({ city }: ConnectedComponentProps): JSX.Element {
  const filtredOffers = mockOffers.filter((offer) => offer.city.name === city);

  const pages = [
    {
      component: () => (
        <MainScreen
          offers={filtredOffers}
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
