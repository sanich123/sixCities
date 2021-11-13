import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORT } from '../../../const';
import { Offer } from '../../../types/types';
import { changeCity, changeSortName, loadHotels } from './app-actions';

export type AppInitialState = {
city: string,
sortName: string,
offers: Offer[],
isDataLoaded: boolean,
}

const initialState: AppInitialState = {
  city: DEFAULT_CITY,
  sortName: DEFAULT_SORT,
  offers: [],
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (({ city }: AppInitialState, action) => {
      city = action.payload;
    }))
    .addCase(loadHotels, (({ offers, isDataLoaded }: AppInitialState, action) => {
      offers = action.payload;
      isDataLoaded = true;
    }))
    .addCase(changeSortName, (({ sortName }: AppInitialState, action) => {
      sortName = action.payload;
    }));
});

export { appData };
