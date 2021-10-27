import { ActionType } from '../types/reducer';
import { Offer, Review } from '../types/types';

export const initStore = (filtredOffers: Offer[], sortedOffers: Offer[], reviews: Review[]) => ({
  type: ActionType.INIT,
  payload: filtredOffers, sortedOffers, reviews,
} as const);

export const changeCity = (city: string) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
} as const);

export const setOffers = (offers: Offer[]) => ({
  type: ActionType.SET_OFFERS,
  payload: offers,
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
