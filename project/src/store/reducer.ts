import {  AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT } from '../const';
import { Actions, State, ActionType } from '../types/reducer';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortedOffers: [],
  sortName: DEFAULT_SORT,
  reviews: [],
  filtredOffers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationEmail: null,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return { ...state, offers: action.payload, isDataLoaded: true };
    case ActionType.REQUIRE_AUTHORIZATION: {
      const { authStatus, authEmail } = action.payload;
      return {
        ...state,
        authorizationStatus: authStatus,
        authorizationEmail: authEmail,
      };
    }
    case ActionType.REQUIRE_LOGOUT:
      return { ...state, authorizationStatus: AuthorizationStatus.NO_AUTH };
    case ActionType.INIT_OFFERS:
      return { ...state, offers: action.payload };
    case ActionType.INIT_REVIEWS:
      return { ...state, reviews: action.payload };
    case ActionType.CHANGE_CITY:
      return { ...state, city: action.payload };
    case ActionType.SORT_OFFERS:
      return {...state, sortedOffers: action.payload };
    case ActionType.CHANGE_SORT:
      return {...state, sortName: action.payload };
    case ActionType.FILTER_OFFERS:
      return {...state, filtredOffers: action.payload };
    default:
      return state;
  }
};

export { reducer };
