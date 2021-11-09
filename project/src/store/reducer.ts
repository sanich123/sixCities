import {  AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT } from '../const';
import { Actions, State, ActionType } from '../types/reducer';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  uniqOffer: null,
  comments: null,
  sortedOffers: [],
  sortName: DEFAULT_SORT,
  reviews: [],
  filtredOffers: [],
  nearByOffers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  authorizationEmail: null,
  isDataLoaded: false,
  isCommentPosted: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return { ...state, offers: action.payload, isDataLoaded: true };
    case ActionType.LOAD_OFFER:
      return { ...state, uniqOffer: action.payload };
    case ActionType.LOAD_COMMENTS:
      return { ...state, comments: action.payload, isCommentPosted: false };
    case ActionType.POST_COMMENT:
      return { ...state, isCommentPosted: true };
    case ActionType.POST_COMMENT_FAIL:
      return { ...state, isCommentPosted: false };
    case ActionType.LOAD_NEARBY:
      return { ...state, nearByOffers: action.payload };
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
