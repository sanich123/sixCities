import { createReducer } from '@reduxjs/toolkit';
import { Offer, Review } from '../../../types/types';
import { filterOffers, isAvailableNetwork, loadFavorites, loadNearBy, loadUniqHotel, loadUniqHotelComments, sortOffers } from './data-actions';

export type DataInitialState = {
  favoriteOffers: Offer[],
  uniqOffer: Offer | null,
  comments: Review[] | null,
  sortedOffers: Offer[],
  filtredOffers: Offer[],
  nearByOffers: Offer[],
  networkIsAvailable: boolean,
}

const initialState: DataInitialState = {
  favoriteOffers: [],
  uniqOffer: null,
  comments: null,
  sortedOffers: [],
  filtredOffers: [],
  nearByOffers: [],
  networkIsAvailable: true,
};

const dataData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavorites, (({ favoriteOffers }: DataInitialState, action) => {
      favoriteOffers = action.payload;
    }))
    .addCase(loadUniqHotel, (({ uniqOffer, networkIsAvailable }: DataInitialState, action) => {
      uniqOffer = action.payload;
      networkIsAvailable = true;
    }))
    .addCase(loadUniqHotelComments, (({ comments }: DataInitialState, action) => {
      comments = action.payload;
    }))
    .addCase(sortOffers, (({ sortedOffers }: DataInitialState, action) => {
      sortedOffers = action.payload;
    }))
    .addCase(filterOffers, (({ filtredOffers }: DataInitialState, action) => {
      filtredOffers = action.payload;
    }))
    .addCase(loadNearBy, (({ nearByOffers }: DataInitialState, action) => {
      nearByOffers = action.payload;
    }))
    .addCase(isAvailableNetwork, ((state: DataInitialState, action) => {
      state.networkIsAvailable = false;
    }));
});

export { dataData };
