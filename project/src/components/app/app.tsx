import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sortTypeChanger } from '../../const';
import { generateRoutes } from '../../utils/utils';
import { sortOffers, filterOffers } from '../../store/action';
import { pages } from '../../utils/pages';

function App(): JSX.Element {
  const offers = useSelector((state) => state.offers);
  const sortName = useSelector((state) => state.sortName);
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const filtredOffers = offers.filter((offer) => offer.city.name === city);
  dispatch(filterOffers(filtredOffers));
  const sortedOffers = sortTypeChanger[sortName](filtredOffers);
  dispatch(sortOffers(sortedOffers));

  return (
    <BrowserRouter>
      <Switch>
        { pages.map(({ component, route, isPrivate }) => generateRoutes({ isPrivate, component, route  })) }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
