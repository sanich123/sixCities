import { ActionType } from '../components/const';
import { mockOffers } from '../mock/offers';
import { Offer } from '../types/types';

type ReducerProps = {
  city: string,
  offers: Offer[]
}

export type ChangeCity = {
  type: string,
  payload: string,
}

const initialState = {
  city: 'Paris',
  offers: mockOffers.slice().filter(({city}) => city.name === 'Amsterdam'),
};

const reducer = (state: ReducerProps = initialState, action: ChangeCity): ReducerProps => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return { ...state, city: action.payload };
    case ActionType.SET_OFFERS:
      return {...state, city: action.payload };
    default:
      return state;
  }
};

export { reducer };
