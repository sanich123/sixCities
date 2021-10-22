import { ActionType, DEFAULT_CITY } from '../components/const';
import { mockOffers } from '../mock/offers';
import { Actions, State } from '../types/reducer';

const initialState = {
  city: DEFAULT_CITY,
  offers: mockOffers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return { ...state, city: action.payload };
    case ActionType.SET_OFFERS:
      return {...state, offers: action.payload };
    default:
      return state;
  }
};

export { reducer };
