import { connect, ConnectedProps} from 'react-redux';
import { State } from '../../types/reducer';
import { useState } from 'react';
import Cards from './cards';
import Header from '../common/header';
import Sprite from '../common/sprite';
import Sort from './sort';
import Filter from './filter';
import Map from '../map/map';
import { Offer } from '../../types/types';

type MainProps = {
  offers: Offer[],
  // setSortChange: (value: string) => void,
  // sortChange: string,
}

const mapStateToProps = ({ city }: State) => ({
  city,
});

const connector = connect(mapStateToProps);
type ConnectedComponentProps = ConnectedProps<typeof connector>;

function Main({ offers, city,
  // setSortChange, sortChange
}:
  ConnectedComponentProps &
  MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const onHover = (id: number | null) => setActiveOffer(id);

  return (
    <>

      <Sprite />

      <div className="page page--gray page--main">

        <Header />

        <main className={`page__main page__main--index ${ !offers.length && 'page__main--index-empty'}` }>

          <Filter />

          <div className="cities">
            <div className={`cities__places-container container ${ !offers.length && 'cities__places-container--empty container'}` }>
              { offers.length ?
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{ offers.length } places to stay in { city }</b>

                  <Sort />

                  <Cards offers={ offers } onHover={ onHover } />

                </section> :
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in { city }</p>
                  </div>
                </section> }
              <div className="cities__right-section">
                { offers.length &&
                  <section className="cities__map map">
                    <Map offers={ offers } activeOffer={ activeOffer } />
                  </section> }
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export { Main };
export default connector(Main);

