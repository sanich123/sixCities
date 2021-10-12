import { Link } from 'react-router-dom';
function Filter(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Paris</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Cologne</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Brussels</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item tabs__item--active" to="/">
                <span>Amsterdam</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Hamburg</span>
              </Link>
            </li>
            <li className="locations__item">
              <Link className="locations__item-link tabs__item" to="/">
                <span>Dusseldorf</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Filter;

// import { Cities } from '../../const';
// import { Link } from 'react-router-dom';
// import { nanoid } from '@reduxjs/toolkit';
// {Cities.map((city) => (
//   <li key={nanoid()} className="locations__item">
//     <Link className="locations__item-link tabs__item" to="/">
//       <span>{city}</span>
//     </Link>
//   </li>))}
