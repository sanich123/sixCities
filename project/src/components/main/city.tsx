import { Link } from 'react-router-dom';

type CityProps = {
  town: string,
  onClick: (value: string) => void,
  currentValue: string,
}

function City({ town, onClick, currentValue = 'Paris' }: CityProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link
        className={ `locations__item-link tabs__item ${ currentValue === town && 'tabs__item--active'}` }
        to="/"
        onClick={ () => onClick(town) }
      >
        <span>{ town }</span>
      </Link>
    </li>
  );
}

export default City;
