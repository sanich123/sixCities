import CardsList from '../cards/cards';
import Header from '../header/header';
import Sprite from '../sprite/sprite';
import Sort from '../sort/sort';
import Filter from '../filter/filter';
import { Offers } from '../types/types';

type MainProps = {
  placesCount: number,
  cards: number[],
  offers: Offers,
}

function Main({placesCount, cards, offers}: MainProps): JSX.Element {

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
                <b className="places__found">{placesCount} places to stay in Amsterdam</b>

                <Sort />

                <CardsList cards={cards} offers={offers} />

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
