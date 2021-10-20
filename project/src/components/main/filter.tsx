import { useState } from 'react';
import { cities } from '../const';
import City from './city';
// import {bindActionCreators, Dispatch} from 'redux';
// import {connect, ConnectedProps} from 'react-redux';


function Filter(): JSX.Element {
  const [currentValue, setValue] = useState('');
  // eslint-disable-next-line no-console
  console.log(currentValue);
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {cities.map((town) => <City key={town} onClick={setValue} town={town} currentValue={currentValue} />)}

          </ul>
        </section>
      </div>
    </>
  );
}

export default Filter;
