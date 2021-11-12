import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../const';
import { changeCity, sortOffers, changeSortName, filterOffers, requireAuthorization, requireLogout, loadHotels, loadUniqHotel, loadUniqHotelComments, loadNearBy, commentRequest, commentRequestFail, loadFavorites, networkIsAvailable, failedComment } from '../store/actions';
import { Offer, Review } from './types';

export enum ActionType {
  LOAD_OFFERS = 'data/downloading-offers',
  LOAD_FAVORITES = 'data/downloading-favorite-offers',
  LOAD_OFFER = 'data/downloading-offer',
  LOAD_COMMENTS = 'data/downloading-comments',
  POST_COMMENT = 'data/post-comment',
  POST_COMMENT_FAIL = 'data/post-comment-fail',
  FAILED_COMMENT = 'data/failed-comment',
  NETWORK_ERROR = 'data/downloading-is-fail',
  LOAD_NEARBY = 'data/downloading-nearby-hotels',
  REQUIRE_AUTHORIZATION = 'user/authorization-required',
  REQUIRE_LOGOUT = 'user/logout-required',
  CHANGE_CITY = 'data/change-city',
  SORT_OFFERS = 'data/sort-offers',
  FILTER_OFFERS = 'data/filter-offers',
  CHANGE_SORT = 'data/change-sort-name',
}

export type Actions =
| ReturnType <typeof changeCity>
| ReturnType <typeof sortOffers>
| ReturnType <typeof changeSortName>
| ReturnType <typeof filterOffers>
| ReturnType <typeof loadHotels>
| ReturnType <typeof loadUniqHotel>
| ReturnType <typeof requireAuthorization>
| ReturnType <typeof requireLogout>
| ReturnType <typeof loadUniqHotelComments>
| ReturnType <typeof loadNearBy>
| ReturnType <typeof commentRequest>
| ReturnType <typeof commentRequestFail>
| ReturnType <typeof loadFavorites>
| ReturnType <typeof networkIsAvailable>
| ReturnType <typeof failedComment>

export type State = {
  city: string,
  offers: Offer[],
  favoriteOffers: Offer[],
  uniqOffer: Offer | null,
  comments: Review[] | null,
  sortedOffers: Offer[],
  sortName: string,
  reviews: Review[],
  filtredOffers: Offer[],
  nearByOffers: Offer[],
  authorizationStatus: AuthorizationStatus,
  authorizationEmail: string | undefined | null,
  isDataLoaded: boolean,
  isCommentPosted: boolean,
  networkIsAvailable: boolean,
  failedComment: boolean,
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
