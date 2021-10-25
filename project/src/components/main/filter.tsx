import City from './city';
import { cities } from '../const';

function Filter(): JSX.Element {

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            { cities.map((town) => <City key={ town } town={ town } />) }

          </ul>
        </section>
      </div>
    </>
  );
}

export default Filter;
