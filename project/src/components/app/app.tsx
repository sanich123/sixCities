import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sortTypeChanger } from '../../const';
import { generateRoutes } from '../../utils/utils';
import { sortOffers, filterOffers } from '../../store/action';
import { pages } from '../../utils/pages';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../types/reducer';

function App(): JSX.Element {
  const authStatus = useSelector(({ authorizationStatus }) => authorizationStatus);
  const isLoaded = useSelector(({ isDataLoaded }) => isDataLoaded);
  const sortedName = useSelector(({ sortName }) => sortName);
  const town = useSelector(({ city }) => city);
  const filtredOffers = useSelector(({ offers }) => offers).filter(({ city }) => city.name === town);

  const dispatch = useDispatch();
  dispatch(filterOffers(filtredOffers));
  const sortedOffers = sortTypeChanger[sortedName](filtredOffers);
  dispatch(sortOffers(sortedOffers));

  if (isCheckedAuth(authStatus) || !isLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        { pages.map(({ component, route, isPrivate }) => generateRoutes({ isPrivate, component, route  })) }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
