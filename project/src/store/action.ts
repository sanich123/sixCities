import { ActionType } from '../components/const';
import { Offer } from '../types/types';

export const changeCity = (city: string) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
} as const);

export const setOffers = (offers: Offer[]) => ({
  type: ActionType.SET_OFFERS,
  payload: offers,
} as const);
