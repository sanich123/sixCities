import { Offer, Review } from '../../../types/types';
import { NameSpace, RootState } from '../root-reducer';

export const getNetworkStatus = (state: RootState): boolean => state[NameSpace.data].networkIsAvailable;

export const getFiltredOffers = (state: RootState): Offer[] => state[NameSpace.data].filtredOffers;

export const offersSorted = (state: RootState): Offer[] => state[NameSpace.data].sortedOffers;

export const favorites = (state: RootState): Offer[] => state[NameSpace.data].favoriteOffers;

export const offerSelected = (state: RootState): Offer | null => state[NameSpace.data].uniqOffer;

export const offersNearBy = (state: RootState): Offer[] => state[NameSpace.data].nearByOffers;

export const offersComments = (state: RootState): Review[] | null => state[NameSpace.data].comments;
