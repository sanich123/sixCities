import { sortTypes } from '../const';
import SortItem from './sort-item';
type SortProps = {
  setSortClick: (value: string) => void,
  setSortChange: (value: string) => void,
  sortClick: string,
  sortChange: string,
}
function Sort({ setSortClick, setSortChange, sortClick, sortChange }: SortProps): JSX.Element {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={ 0 } onClick={() => setSortClick(';')}>
        { sortChange }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ `${ sortClick && 'places__options--opened'} places__options places__options--custom`}>
        { Object.values(sortTypes).map((sortType) => <SortItem key={ sortType } sortType={ sortType } setSortChange={ setSortChange } />)}
      </ul>
    </form>
  );
}

export default Sort;
