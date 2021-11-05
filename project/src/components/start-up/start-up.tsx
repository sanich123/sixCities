import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { mockReviews } from '../../mock/reviews';
import { initReviews} from '../../store/actions';
import App from '../app/app';

function StartUp(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initReviews(mockReviews));
  }, [dispatch]);

  return <App />;
}

export default StartUp;
