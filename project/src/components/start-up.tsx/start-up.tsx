import { Dispatch, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { DEFAULT_CITY, DEFAULT_SORT, sortTypeChanger } from '../../const';
import { mockOffers } from '../../mock/offers';
import { mockReviews } from '../../mock/reviews';
import { initStore } from '../../store/action';
import { Actions } from '../../types/reducer';
import { Offer, Review } from '../../types/types';


const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  initialStore(filtredOffers: Offer[], sortedOffers: Offer[], reviews: Review[]) {
    dispatch(initStore(filtredOffers, sortedOffers, reviews));
  },
});

const connector = connect(mapDispatchToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;
const filtredOffers = mockOffers.filter((offer) => offer.city.name === DEFAULT_CITY);
const sortedOffers = sortTypeChanger[DEFAULT_SORT](filtredOffers);

function StartUp({ initialStore }: ConnectedComponentProps): JSX.Element {
  useEffect(() => {
    initialStore(filtredOffers, sortedOffers, mockReviews);
  });
  return (<div></div>);
}

export { StartUp };
export default connector(StartUp);
