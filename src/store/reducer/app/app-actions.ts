import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../../types/reducer';
import { Offer } from '../../../types/types';

export const loadHotels = createAction(
  ActionType.LOAD_OFFERS,
  (hotels: Offer[]) => ({
    payload: hotels,
  }),
);

export const changeCity = createAction(
  ActionType.CHANGE_CITY,
  (city: string) => ({
    payload: city,
  }),
);

export const changeSortName = createAction(
  ActionType.CHANGE_SORT,
  (name: string) => ({
    payload: name,
  }),
);
