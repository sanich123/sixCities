import { changeCity, setOffers } from '../store/action';
import { Offer } from './types';

export const ActionType = {
  CHANGE_CITY: 'data/change-city',
  SET_OFFERS: 'data/set-offers',
};

export type Actions =
| ReturnType <typeof changeCity>
| ReturnType <typeof setOffers>;

export type State = {
  city: string,
  offers: Offer[]
}
