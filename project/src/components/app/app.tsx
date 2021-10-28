import { BrowserRouter, Switch } from 'react-router-dom';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { sortTypeChanger } from '../../const';
import { generateRoutes } from '../../utils/utils';
import { State } from '../../types/reducer';
import { sortOffers, filterOffers } from '../../store/action';
import { pages } from '../../utils/pages';

function mapStateToProps({ city, offers, sortName }: State) {
  return ({
    city, offers, sortName,
  });
}

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function App({ city, offers, sortName }: ConnectedComponentProps): JSX.Element {
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

export { App };
export default connector(App);
