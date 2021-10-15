import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from '../private-route';
import Favorites from '../favorites/favorites';
import MainScreen from '../main/main';
import LogIn from '../login/login';
import Properties from '../properties/properties';
import Page404 from '../page404/page404';
import {AuthorizationStatus} from '../const';
import {mockOffers} from '../../mock/offers';
import {mockReviews} from '../../mock/reviews';
import {AppRoute} from '../const';

function App(): JSX.Element {
  const Pages = [
    {
      component: () => (
        <MainScreen
          offers={mockOffers}
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
      component: () => (<Favorites offers={mockOffers}/>),
      isPrivate: true,
      route: AppRoute.Favorites,
    },
    {
      component: () => <Properties offers={mockOffers} reviews={mockReviews}/>,
      isPrivate: false,
      route: AppRoute.Room,
    },
    {
      component: () => <Page404 />,
      isPrivate: false,
      route: '',
    },
  ];

  const simplyRoute = Pages.map(({component, route, isPrivate}) =>
    isPrivate ?
      <PrivateRoute exact path={route} key={route} authorizationStatus={AuthorizationStatus.AUTH} render={() => <Favorites offers={mockOffers}/>} /> :
      <Route exact path={route} key={route} component={component} />,
  );

  return (
    <BrowserRouter>
      <Switch>
        {simplyRoute}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
