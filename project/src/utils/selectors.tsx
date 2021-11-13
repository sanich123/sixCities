import { AuthorizationStatus } from '../const';
import { State } from '../types/reducer';
import { Offer, Review } from '../types/types';


export const dataLoaded = ({ isDataLoaded }: State): boolean => isDataLoaded;
//
export const currentPlace = ({ city }: State): string => city;
//
export const nameOfSort = ({ sortName }: State): string => sortName;
//
export const getOffers = ({ offers }: State): Offer[] => offers;
//
export const offersComments = ({ comments }: State): Review[] | null => comments;
//
export const offersNearBy = ({ nearByOffers }: State): Offer[] => nearByOffers;
//
export const offerSelected = ({ uniqOffer }: State): Offer | null => uniqOffer;
//
export const favorites = ({ favoriteOffers }: State): Offer[] => favoriteOffers;

//
export const offersSorted = ({ sortedOffers }: State): Offer[] => sortedOffers;
//
export const getFiltredOffers = ({ filtredOffers }: State): Offer[] => filtredOffers;
//
export const getNetworkStatus = ({ networkIsAvailable }: State): boolean => networkIsAvailable;

//
export const statusOfAuth = ({ authorizationStatus }: State): AuthorizationStatus => authorizationStatus;
//
export const getCommentStatus = ({ isCommentPosted }: State): boolean => isCommentPosted;
//
export const getAuthEmail = ({ authorizationEmail }: State): string | null | undefined => authorizationEmail;
