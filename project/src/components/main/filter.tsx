import { cities } from '../const';
import City from './city';

function Filter(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {cities.map((city) => <City key={city} city={city} />)}

          </ul>
        </section>
      </div>
    </>
  );
}

export default Filter;
