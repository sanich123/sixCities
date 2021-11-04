import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mockOffers } from '../../mock/offers';
import { mockReviews } from '../../mock/reviews';
import { initOffers, initReviews } from '../../store/action';
import App from '../app/app';
import { AuthorizationStatus } from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

function StartUp(): JSX.Element {
  const authStatus = useSelector(({ authorizationStatus }) => authorizationStatus);
  const isLoaded = useSelector(({ isDataLoaded }) => isDataLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initOffers(mockOffers));
    dispatch(initReviews(mockReviews));
  }, [dispatch]);

  if (authStatus === AuthorizationStatus.UNKNOWN || !isLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return <App />;
}

export default StartUp;
