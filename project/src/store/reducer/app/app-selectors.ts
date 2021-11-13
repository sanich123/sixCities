import { Offer } from '../../../types/types';
import { NameSpace, RootState } from '../root-reducer';

export const getOffers = (state: RootState): Offer[] => state[NameSpace.app].offers;

export const currentPlace = (state: RootState): string => state[NameSpace.app].city;

export const nameOfSort = (state: RootState): string => state[NameSpace.app].sortName;

export const dataLoaded = (state: RootState): boolean => state[NameSpace.app].isDataLoaded;

export const getFiltredOffers = (state: RootState): Offer[] => state[NameSpace.app].filtredOffers;
