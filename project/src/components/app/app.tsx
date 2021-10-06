import MainScreen from '../main/main';
import Page404 from '../page404/page404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../components/const ';
import LogIn from '../login/login';
import Favorites from '../favorites/favorites';
import Properties from '../properties/properties';
import PrivateRoute from '../private-route';

type AppProps = {
  placesCount: number,
  cards: number[]
}

function App({placesCount, cards}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainScreen
            placesCount={placesCount} cards={cards}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <LogIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <LogIn />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
          <Favorites />
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Properties />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
