import { AuthorizationStatus } from '../const';
import { ActionType } from '../types/reducer';
import { Offer, Review } from '../types/types';

export const changeCity = (city: string) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
} as const);

export const sortOffers = (offers: Offer[]) => ({
  type: ActionType.FILTER_OFFERS,
  payload: offers,
} as const);

export const filterOffers = (offers: Offer[]) => ({
  type: ActionType.SORT_OFFERS,
  payload: offers,
} as const);

export const changeSortName = (name: string) => ({
  type: ActionType.CHANGE_SORT,
  payload: name,
} as const);

export const loadHotels = (offers: Offer[]) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
} as const);

export const loadUniqHotel = (offer: Offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
} as const);

export const loadUniqHotelComments = (comments: Review[]) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
  isCommentPosted: false,
} as const);

export const commentRequest = () => ({
  type: ActionType.POST_COMMENT,
  isCommentPosted: true,
} as const);

export const commentRequestFail = () => ({
  type: ActionType.POST_COMMENT_FAIL,
  isCommentPosted: false,
} as const);

export const loadNearBy = (hotels: Offer[]) => ({
  type: ActionType.LOAD_NEARBY,
  payload: hotels,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus, authEmail?: string | null | undefined) => ({
  type: ActionType.REQUIRE_AUTHORIZATION,
  payload: {
    authStatus,
    authEmail,
  },
} as const);

export const requireLogout = () => ({
  type: ActionType.REQUIRE_LOGOUT,
  payload: AuthorizationStatus.NO_AUTH,
} as const);
