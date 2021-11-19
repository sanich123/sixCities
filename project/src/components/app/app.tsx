import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { generateRoutes } from '../../utils/utils';
import { pages } from '../../utils/pages';
import { currentPlace, dataLoaded, getOffers, nameOfSort } from '../../store/reducer/app/app-selectors';
import { filterOffers, sortOffers } from '../../store/reducer/data/process-data-actions';
import { sortTypeChanger } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const isLoaded = useSelector(dataLoaded);
  const sortedName = useSelector(nameOfSort);
  const town = useSelector(currentPlace);
  const offers = useSelector(getOffers);
  const filtredOffers = offers.filter(({ city }) => city.name === town);
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
