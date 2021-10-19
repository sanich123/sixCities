import { ActionType } from '../components/const';
import { ChangeCity } from './reducer';


export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});

export const setOffers = (city: string): ChangeCity => ({
  type: ActionType.SET_OFFERS,
  payload: city,
});
