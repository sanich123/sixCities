import { Offer } from '../../../types/types';
import { Modificator } from '../../const';
import Card from '../../main/card/card';

type FavoritesListProps = {
  city: string,
  offers: Offer[],
 }

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { city, offers } = props;
  const cityOffers = offers.filter((offer) => offer.city.name === city);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{ city }</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        { cityOffers.map(({ id, ...rest }) => (<Card id={ id } key={ id } { ...rest } modificator={ Modificator.FAVORITES } />)) }
      </div>
    </li>
  );
}

export default FavoritesList;
