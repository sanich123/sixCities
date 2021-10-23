import { useState } from 'react';
import { sortTypes } from '../const';
import SortItem from './sort-item';

type SortProps = {

  setSortChange: (value: string) => void,
  sortChange: string,
}

function Sort({ setSortChange, sortChange }: SortProps): JSX.Element {
  const [isOpen, sortChangeListener] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => sortChangeListener(!isOpen)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={ 0 }>
        { sortChange }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ `${ isOpen && 'places__options--opened'} places__options places__options--custom`}>
        { Object.values(sortTypes).map((sortType) => <SortItem key={ sortType } sortType={ sortType } setSortChange={ setSortChange } />)}
      </ul>
    </form>
  );
}

export default Sort;
