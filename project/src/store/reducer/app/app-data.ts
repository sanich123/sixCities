import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT } from '../../../const';
import { Offer } from '../../../types/types';
import { filterOffers } from '../process/process-data-actions';

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
      state.city = action.payload;
    }))
    .addCase(loadHotels, ((state: AppInitialState, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    }))
    .addCase(changeSortName, ((state: AppInitialState, action) => {
      state.sortName = action.payload;
    }))
    .addCase(filterOffers, ((state: AppInitialState, action) => {
      state.filtredOffers = action.payload;
    }));
});

export { appData };
