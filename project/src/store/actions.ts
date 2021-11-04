import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/reducer';
import { Offer, Review } from '../types/types';

export const initOffers = (offers: Offer[]) => ({
  type: ActionType.INIT_OFFERS,
  payload: offers,
} as const);

export const initReviews = (reviews: Review[]) => ({
  type: ActionType.INIT_REVIEWS,
  payload: reviews,
} as const);

export const changeCity = (city: string) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
} as const);

export const sortOffers = (offers: Offer[]) => ({
  type: ActionType.FILTER_OFFERS,
  payload: offers,
} as const);

export const filterOffers = (offers: Offer[]) => ({
  type: ActionType.SORT_OFFERS,
  payload: offers,
} as const);

export const changeSortName = (name: string) => ({
  type: ActionType.CHANGE_SORT,
  payload: name,
} as const);

export const loadHotels = (offers: Offer[]) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.REQUIRE_LOGOUT,
} as const);