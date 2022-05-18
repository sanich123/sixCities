import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../const';
import { Offer, Review } from './types';
import { changeCity, changeSortName, loadHotels } from '../store/reducer/app/app-actions';
import { filterOffers, isAvailableNetwork, loadFavorites, loadNearByHotels, loadSelectedHotel, loadSelectedHotelComments, sortOffers } from '../store/reducer/process/process-data-actions';
import { commentRequest, commentRequestFail, requireAuthorization, requireLogout } from '../store/reducer/user/user-actions';

export enum ActionType {
  LOAD_OFFERS = 'app/downloading-offers',
  LOAD_FAVORITES = 'data/downloading-favorite-offers',
  LOAD_OFFER = 'data/downloading-offer',
  LOAD_COMMENTS = 'data/downloading-comments',
  POST_COMMENT = 'user/post-comment',
  POST_COMMENT_FAIL = 'user/post-comment-fail',
  NETWORK_ERROR = 'data/downloading-is-fail',
  LOAD_NEARBY = 'data/downloading-nearby-hotels',
  REQUIRE_AUTHORIZATION = 'user/authorization-required',
  REQUIRE_LOGOUT = 'user/logout-required',
  CHANGE_CITY = 'app/change-city',
  SORT_OFFERS = 'app/sort-offers',
  FILTER_OFFERS = 'app/filter-offers',
  CHANGE_SORT = 'data/change-sort-name',
}

export type Actions =
| ReturnType <typeof changeCity>
| ReturnType <typeof sortOffers>
| ReturnType <typeof changeSortName>
| ReturnType <typeof filterOffers>
| ReturnType <typeof loadHotels>
| ReturnType <typeof loadSelectedHotel>
| ReturnType <typeof requireAuthorization>
| ReturnType <typeof requireLogout>
| ReturnType <typeof loadSelectedHotelComments>
| ReturnType <typeof loadNearByHotels>
| ReturnType <typeof commentRequest>
| ReturnType <typeof commentRequestFail>
| ReturnType <typeof loadFavorites>
| ReturnType <typeof isAvailableNetwork>

export type State = {
  city: string,
  offers: Offer[],
  favoriteOffers: Offer[],
  uniqOffer: Offer | null,
  comments: Review[] | null,
  sortedOffers: Offer[],
  sortName: string,
  filtredOffers: Offer[],
  nearByOffers: Offer[],
  authorizationStatus: AuthorizationStatus,
  authorizationEmail: string | undefined | null,
  isDataLoaded: boolean,
  isCommentPosted: boolean,
  networkIsAvailable: boolean,
};

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
