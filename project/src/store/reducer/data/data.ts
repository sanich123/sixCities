import { createReducer } from '@reduxjs/toolkit';
import { Offer, Review } from '../../../types/types';
import {   isAvailableNetwork,
  loadFavorites, loadNearBy, loadUniqHotel, loadUniqHotelComments, sortOffers } from './data-actions';

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
      const favoriteOffers = action.payload;
      state.favoriteOffers = favoriteOffers;
    }))
    .addCase(loadUniqHotel, ((state: DataInitialState, action) => {
      const uniqOffer = action.payload;
      state.uniqOffer = uniqOffer;
      state.networkIsAvailable = true;
    }))
    .addCase(loadUniqHotelComments, ((state: DataInitialState, action) => {
      const comments = action.payload;
      state.comments = comments;
    }))
    .addCase(sortOffers, ((state: DataInitialState, action) => {
      const offers = action.payload;
      state.sortedOffers = offers;
    }))
    .addCase(loadNearBy, ((state: DataInitialState, action) => {
      const nearByOffers = action.payload;
      state.nearByOffers = nearByOffers;
    }))
    .addCase(isAvailableNetwork, ((state: DataInitialState) => {
      state.networkIsAvailable = false;
    }));
});

export { processData };
