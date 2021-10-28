import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mockOffers } from '../../mock/offers';
import { mockReviews } from '../../mock/reviews';
import { initOffers, initReviews } from '../../store/action';
import App from '../app/app';

function StartUp(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initOffers(mockOffers));
    dispatch(initReviews(mockReviews));
  }, [dispatch]);
  return (<App />);
}

export default StartUp;
