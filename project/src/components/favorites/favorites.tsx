import Sprite from '../common/sprite';
import Header from '../common/header';
import Footer from '../main/footer';
import FavoritesList from './favorite-list';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/reducer';

const mapStateToProps = ({ offers }: State) => ({
  offers,
});

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function Favorites({ offers }: ConnectedComponentProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const uniqueСities = Array.from(new Set(favoriteOffers.map(({ city }) => city.name)));

  return (
    <>
      <Sprite />

      <div className={ `${!favoriteOffers.length && 'page--favorites-empty'} page`}>

        <Header />

        <main className={ `${!favoriteOffers.length && 'page__main--favorites-empty'} page__main page__main--favorites`}>
          <div className="page__favorites-container container">
            <section className={ `favorites${ !favoriteOffers.length && '--empty'}`}>
              <h1 className={ favoriteOffers.length ? 'favorites__title' : 'visually-hidden'}>{ favoriteOffers.length ? 'Saved listing' : 'Favorites (empty)'}</h1>
              { favoriteOffers.length ?
                <ul className="favorites__list">
                  { uniqueСities.map((city) =>
                    (<FavoritesList city={ city } offers={ favoriteOffers } key={ city } />)) }
                </ul>
                :
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div> }
            </section>
          </div>
        </main>

        <Footer />

      </div>
    </>
  );
}

export { Favorites };
export default connector(Favorites);
