type SortItemProps = {
  sortType: string,
  setSortChange: (value: string) => void,
}

function SortItem({ sortType, setSortChange }: SortItemProps): JSX.Element {
  return (
    <li className="places__option" onClick={ () => setSortChange(sortType) } tabIndex={ 0 }>{ sortType }</li>
  );
}

export default SortItem;
