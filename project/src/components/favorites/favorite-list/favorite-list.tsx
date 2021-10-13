import { Offers } from '../../../types/types';
import FavoriteCity from '../favorite-city/favorite-city';

// type Offer = {
// bedrooms: number,
// city: {
//   name: string,
//   // location: {
//   //   latitude: number,
//   //   longitude: number,
//   //   zoom: number,
//   // }
// }
// description: string,
// goods: string[],
// host: {
//   isPro: boolean,
//   avatarUrl: string,
//   id: number,
//   name: string,
// }
//   id: number,
//   images: string[],
//   isPremium: boolean,
//   isFavorite: boolean,
//   // location: {
//   //   latitude: number,
//   //   longitude: number,
//   //   zoom: number,
//   // }
//   maxAdults: number,
//   previewImage: string,
//   price: number,
//   rating: number,
//   title: string,
//   type: string,
//  }

type FavoritesListProps = {
  city: string,
  offers: Offers,
}

function FavoritesList(props: FavoritesListProps): JSX.Element {
  const { city, offers } = props;
  const cityOffers = offers.filter((offer) => offer.city.name === city);
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.map((offer) => <FavoriteCity offer={offer} key={offer.id} />)}
      </div>
    </li>
  );
}

export default FavoritesList;
