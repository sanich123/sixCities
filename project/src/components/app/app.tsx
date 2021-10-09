import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../private-route';
import Favorites from '../favorites/favorites';
import { AuthorizationStatus } from '../../components/const ';
import { Offers } from '../types/types';

type AppProps = {
  pages: {
    component: () => JSX.Element,
    isPrivate: boolean,
    route: string,
  }[]
}

function App({pages}: AppProps, offers: Offers ): JSX.Element {
  const simplyRoute = pages.map(({component, route, isPrivate}) =>
    isPrivate === false ?
      <Route exact path={route}>{component}</Route>
      :
      <PrivateRoute exact path={route} authorizationStatus={AuthorizationStatus.NO_AUTH} render={() => <Favorites />} />,
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
