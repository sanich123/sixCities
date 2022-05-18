import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { currentPlace } from '../../store/reducer/app/app-selectors';
import { changeCity } from '../../store/reducer/app/app-actions';
import { useCallback } from 'react';

type CityProps = {
  town: string,
}

function City({ town }: CityProps): JSX.Element {
  const dispatch = useDispatch();
  const place = useSelector(currentPlace);
  const activeCity = cn('locations__item-link tabs__item', { 'tabs__item--active': place === town });

  return (
    <li className="locations__item">
      <Link
        className={ activeCity }
        to="/"
        onClick={ useCallback(() => dispatch(changeCity(town)), [dispatch, town]) }
      >
        <span>{ town }</span>
      </Link>
    </li>
  );
}

export default City;
