import Cards from '../main/cards/cards';
import Header from './header/header';
import Sprite from './sprite/sprite';
import Sort from './sort/sort';
import Filter from './filter/filter';
import {Offers} from '../../types/types';

type MainProps = {
  offers: Offers,
}

function Main({offers}: MainProps): JSX.Element {
  return (
    <>

      <Sprite />

      <div className="page page--gray page--main">

        <Header />

        <main className="page__main page__main--index">

          <Filter />

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in Amsterdam</b>

                <Sort />

                <Cards offers={offers} />

              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
