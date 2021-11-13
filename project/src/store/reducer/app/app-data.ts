import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT } from '../../../const';
import { Offer } from '../../../types/types';
import { filterOffers } from '../data/data-actions';

import { changeCity, changeSortName, loadHotels } from './app-actions';

export type AppInitialState = {
city: string,
sortName: string,
offers: Offer[],
isDataLoaded: boolean,
filtredOffers: Offer[],
}

const initialState: AppInitialState = {
  city: DEFAULT_CITY,
  sortName: DEFAULT_SORT,
  filtredOffers: [],
  offers: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, ((state: AppInitialState, action) => {
      const city = action.payload;
      state.city = city;
    }))
    .addCase(loadHotels, ((state: AppInitialState, action) => {
      const offers  = action.payload;
      state.offers = offers;
      state.isDataLoaded = true;
    }))
    .addCase(changeSortName, ((state: AppInitialState, action) => {
      const sortName = action.payload;
      state.sortName = sortName;
    }))
    .addCase(filterOffers, ((state: AppInitialState, action) => {
      const offers = action.payload;
      state.filtredOffers = offers;
    }));
});

export { appData };
