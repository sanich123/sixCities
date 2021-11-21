import { createReducer } from '@reduxjs/toolkit';
import { Offer, Review } from '../../../types/types';
import {   isAvailableNetwork,
  loadFavorites, loadNearByHotels, loadSelectedHotel, loadSelectedHotelComments, sortOffers } from './process-data-actions';

export type DataInitialState = {
  favoriteOffers: Offer[],
  uniqOffer: Offer | null,
  comments: Review[] | null,
  sortedOffers: Offer[],
  nearByOffers: Offer[],
  networkIsAvailable: boolean,
}

const initialState: DataInitialState = {
  favoriteOffers: [],
  uniqOffer: null,
  comments: null,
  sortedOffers: [],
  nearByOffers: [],
  networkIsAvailable: true,
};

const processData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFavorites, ((state: DataInitialState, action) => {
      state.favoriteOffers = action.payload;
    }))
    .addCase(loadSelectedHotel, ((state: DataInitialState, action) => {
      state.uniqOffer = action.payload;
      state.networkIsAvailable = true;
    }))
    .addCase(loadSelectedHotelComments, ((state: DataInitialState, action) => {
      state.comments = action.payload;
    }))
    .addCase(sortOffers, ((state: DataInitialState, action) => {
      state.sortedOffers = action.payload;
    }))
    .addCase(loadNearByHotels, ((state: DataInitialState, action) => {
      state.nearByOffers = action.payload;
    }))
    .addCase(isAvailableNetwork, ((state: DataInitialState) => {
      state.networkIsAvailable = false;
    }));
});

export { processData };
