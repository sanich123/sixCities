import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCity } from '../../store/actions';
import cn from 'classnames';

type CityProps = {
  town: string,
}

function City({ town }: CityProps): JSX.Element {
  const place = useSelector(({ city }) => city);
  const activeCity = cn('locations__item-link tabs__item', { 'tabs__item--active': place === town });
  const dispatch = useDispatch();
  return (
    <li className="locations__item">
      <Link
        className={ activeCity }
        to="/"
        onClick={ () => dispatch(changeCity(town)) }
      >
        <span>{ town }</span>
      </Link>
    </li>
  );
}

export default City;
