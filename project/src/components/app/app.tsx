import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from '../login/login';
import Properties from '../properties/properties';
import PrivateRoute from '../private-route';
import Favorites from '../favorites/favorites';
import MainScreen from '../main/main';
import Page404 from '../page404/page404';
import { AppRoute, AuthorizationStatus } from '../../components/const ';


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
          authorizationStatus={AuthorizationStatus.AUTH}
          render={() => <Favorites />}
        >
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
