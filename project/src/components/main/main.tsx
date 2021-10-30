import { useSelector } from 'react-redux';
import { useState } from 'react';
import Cards from './cards';
import Header from '../common/header';
import Sprite from '../common/sprite';
import Sort from './sort';
import Filter from './filter';
import Map from '../map/map';

function Main(): JSX.Element {
  const city = useSelector((state) => state.city);
  const sortedOffers = useSelector((state) => state.sortedOffers);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const onHover = (id: number | null) => setActiveOffer(id);

  return (
    <>

      <Sprite />

      <div className="page page--gray page--main">

        <Header />

        <main className={`page__main page__main--index ${ !sortedOffers.length && 'page__main--index-empty'}` }>

          <Filter />

          <div className="cities">
            <div className={`cities__places-container container ${ !sortedOffers.length && 'cities__places-container--empty container'}` }>
              { sortedOffers.length ?
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{ sortedOffers.length } places to stay in { city }</b>

                  <Sort />

                  <Cards onHover={ onHover } />

                </section> :
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in { city }</p>
                  </div>
                </section> }
              <div className="cities__right-section">
                { sortedOffers.length &&
                  <section className="cities__map map">
                    <Map offers={ sortedOffers } activeOffer={ activeOffer } />
                  </section> }
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;

