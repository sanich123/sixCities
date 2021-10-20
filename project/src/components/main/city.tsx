import { Link } from 'react-router-dom';

type CityProps = {
  city: string,
}
function City({city}: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item tabs__item--active" to="/">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default City;
