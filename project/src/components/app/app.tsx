import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../private-route';
import Favorites from '../favorites/favorites';
import { AuthorizationStatus } from '../../components/const ';
import { mockOffers } from '../../mock/offers';

type AppProps = {
  pages: {
    component: () => JSX.Element,
    isPrivate: boolean,
    route: string,
    key: string,
  }[]
}

function App({pages}: AppProps): JSX.Element {
  const simplyRoute = pages.map(({component, route, isPrivate, key}) =>
    isPrivate ?
      <PrivateRoute exact path={route} key={key} authorizationStatus={AuthorizationStatus.AUTH} render={() => <Favorites offers={mockOffers}/>} /> :
      <Route exact path={route} key={key}>{component}</Route>,
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
