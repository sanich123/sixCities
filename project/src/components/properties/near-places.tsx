import { Offer } from '../../types/types';
import { PROPERTIES } from '../../const';
import Card from '../common/card';
import { useDispatch } from 'react-redux';
import { fetchFavorites } from '../../store/api-actions';
import { useEffect } from 'react';

type NearPlacesProps = {
  nearPlaces: Offer[],
  onHover? : (id: number) => void
}

function NearPlaces({ nearPlaces, onHover }: NearPlacesProps): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        { nearPlaces.map(({ id, ...rest }) =>
          <Card key={ id } id={ id } { ...rest } onHover= { onHover } modificator={ PROPERTIES } />) }
      </div>
    </section>
  );
}

export default NearPlaces;


