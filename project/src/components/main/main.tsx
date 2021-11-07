import { useSelector } from 'react-redux';
import { useState } from 'react';
import Cards from './cards';
import Header from '../common/header';
import Sprite from '../common/sprite';
import Sort from './sort';
import Filter from './filter';
import Map from '../map/map';
import { State } from '../../types/reducer';

function Main(): JSX.Element {
  const town = useSelector(({ city }: State) => city);
  const sortOffers = useSelector(({ sortedOffers }: State) => sortedOffers);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const onHover = (id: number | null) => setActiveOffer(id);

  return (
    <>

      <Sprite />

      <div className="page page--gray page--main">

        <Header />

        <main className={`page__main page__main--index ${ !sortOffers.length && 'page__main--index-empty'}` }>

          <Filter />

          <div className="cities">
            <div className={`cities__places-container container ${ !sortOffers.length && 'cities__places-container--empty container'}` }>
              { sortOffers.length > 0 ?
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{ sortOffers.length } places to stay in { town }</b>

                  <Sort />

                  <Cards onHover={ onHover } />

                </section> :
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in { town }</p>
                  </div>
                </section> }
              <div className="cities__right-section">
                { sortOffers.length > 0 &&
                  <section className="cities__map map">
                    <Map offers={ sortOffers } activeOffer={ activeOffer } />
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

