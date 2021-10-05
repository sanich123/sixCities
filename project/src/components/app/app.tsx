import MainScreen from '../main/main';
import Page404 from '../page404/page404';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../components/const ';
import LogIn from '../login/login';
import Favorites from '../favorites/favorites';

type Cards = number[];

type AppProps = {
  placesCount: number,
  cards: Cards
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
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.Room} />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
