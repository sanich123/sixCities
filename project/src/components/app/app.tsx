import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sortTypeChanger } from '../../const';
import { generateRoutes } from '../../utils/utils';
import { sortOffers, filterOffers } from '../../store/actions';
import { pages } from '../../utils/pages';
import LoadingScreen from '../loading-screen/loading-screen';
import { State } from '../../types/reducer';

function App(): JSX.Element {
  const isLoaded = useSelector(({ isDataLoaded }: State) => isDataLoaded);
  const sortedName = useSelector(({ sortName }: State) => sortName);
  const town = useSelector(({ city }: State) => city);
  const filtredOffers = useSelector(({ offers }: State) => offers).filter(({ city }) => city.name === town);

  const dispatch = useDispatch();
  dispatch(filterOffers(filtredOffers));
  const sortedOffers = sortTypeChanger[sortedName](filtredOffers);
  dispatch(sortOffers(sortedOffers));

  if (!isLoaded) {
    return <LoadingScreen />;
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
