import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sortTypeChanger } from '../../const';
import { generateRoutes } from '../../utils/utils';
import { sortOffers, filterOffers } from '../../store/actions';
import { pages } from '../../utils/pages';
import LoadingScreen from '../loading-screen/loading-screen';
import { currentPlace, dataLoaded, getOffers, nameOfSort } from '../../utils/selectors';


function App(): JSX.Element {
  const isLoaded = useSelector(dataLoaded);
  const sortedName = useSelector(nameOfSort);
  const town = useSelector(currentPlace);
  const filtredOffers = useSelector(getOffers).filter(({ city }) => city.name === town);

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
