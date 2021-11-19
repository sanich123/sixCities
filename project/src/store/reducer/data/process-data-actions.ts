import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../../types/reducer';
import { Offer, Review } from '../../../types/types';

export const isAvailableNetwork = createAction(ActionType.NETWORK_ERROR);

export const loadFavorites = createAction(
  ActionType.LOAD_FAVORITES,
  (favoriteOffers: Offer[]) => ({
    payload: favoriteOffers,
  }),
);

export const loadSelectedHotel = createAction(
  ActionType.LOAD_OFFER,
  (offer: Offer) => ({
    payload: offer,
  }),
);

export const loadSelectedHotelComments = createAction(
  ActionType.LOAD_COMMENTS,
  (comments: Review[]) => ({
    payload: comments,
  }),
);

export const loadNearByHotels = createAction(
  ActionType.LOAD_NEARBY,
  (hotels: Offer[]) => ({
    payload: hotels,
  }),
);

export const sortOffers = createAction(
  ActionType.SORT_OFFERS,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

export const filterOffers = createAction(
  ActionType.FILTER_OFFERS,
  (offers: Offer[]) => ({
    payload: offers,
  }),
);

