import {  DEFAULT_CITY, DEFAULT_SORT } from '../components/const';
import { mockOffers } from '../mock/offers';
import { mockReviews } from '../mock/reviews';
import { Actions, State, ActionType } from '../types/reducer';

const initialState = {
  city: DEFAULT_CITY,
  offers: mockOffers,
  sortedOffers: mockOffers,
  sortName: DEFAULT_SORT,
  reviews: mockReviews,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return { ...state, city: action.payload };
    case ActionType.SET_OFFERS:
      return {...state, offers: action.payload };
    case ActionType.SORT_OFFERS:
      return {...state, sortedOffers: action.payload };
    case ActionType.CHANGE_SORT:
      return {...state, sortName: action.payload };
    default:
      return state;
  }
};

export { reducer };
