import Card from '../common/card';
import { Offer } from '../../types/types';
import { FAVORITES } from '../../const';
import { Link } from 'react-router-dom';
import { changeCity } from '../../store/reducer/app/app-actions';
import { useDispatch } from 'react-redux';

type FavoritesListProps = {
  city: string,
  offers: Offer[],
 }

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const dispatch = useDispatch();
  const { city, offers } = props;
  const cityOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to="/"
            onClick={ () => dispatch(changeCity(city)) }
          >
            <span>{ city }</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        { cityOffers.map(({ id, ...rest }) => (<Card id={ id } key={ id } { ...rest } modificator={ FAVORITES } />)) }
      </div>
    </li>
  );
}

export default FavoritesList;
