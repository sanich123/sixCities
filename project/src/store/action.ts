import { ActionType } from '../types/reducer';
import { Offer } from '../types/types';

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
