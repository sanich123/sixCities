import { BrowserRouter, Switch } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch  } from 'react';
import { sortTypeChanger } from '../../utils/const';
import { generateRoutes } from '../../utils/utils';
import { Actions, State } from '../../types/reducer';
import { sortOffers, filterOffers } from '../../store/action';
import { Offer } from '../../types/types';
import { pages } from '../../utils/pages';

function mapStateToProps({ city, offers, sortName }: State) {
  return ({
    city, offers, sortName,
  });
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortedOffers(offers: Offer[]) {
    dispatch(sortOffers(offers));
  },
  onFiltredOffers(offers: Offer[]) {
    dispatch(filterOffers(offers));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function App({ city, offers, onSortedOffers, onFiltredOffers, sortName }: ConnectedComponentProps): JSX.Element {
  const filtredOffers = offers.filter((offer) => offer.city.name === city);
  onFiltredOffers(filtredOffers);
  const sortedOffers = sortTypeChanger[sortName](filtredOffers);
  onSortedOffers(sortedOffers);

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
