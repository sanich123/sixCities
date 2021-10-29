import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortName } from '../../store/action';
import { sortTypes } from '../../const';

function Sort(): JSX.Element {
  const sortName = useSelector((state) => state.sortName);
  const [isOpen, sortChangeListener] = useState(false);
  const dispatch = useDispatch();

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => sortChangeListener(!isOpen)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={ 0 }>
        { sortName }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ `${ isOpen && 'places__options--opened'} places__options places__options--custom`}>
        { Object.values(sortTypes).map((sortType) =>
          (<li className="places__option" key={ sortType } onClick={ () => dispatch(changeSortName(sortType)) } tabIndex={ 0 }>{ sortType }</li>))}
      </ul>
    </form>
  );
}

export default Sort;
