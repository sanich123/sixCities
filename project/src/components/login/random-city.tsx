
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cities } from '../../const';
import { changeCity } from '../../store/reducer/app/app-actions';

function RandomCity(): JSX.Element {
  const dispatch = useDispatch();
  const randomCity = cities[Math.floor(Math.random() * cities.length)];

  return                 (
    <Link className="locations__item-link" to="/" onClick={ () => dispatch(changeCity(randomCity)) }>
      <span>{ randomCity }
      </span>
    </Link>);
}

export default memo(RandomCity);
