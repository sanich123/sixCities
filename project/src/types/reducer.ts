import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../const';
import { changeCity, sortOffers, changeSortName, filterOffers, initOffers, initReviews, requireAuthorization, requireLogout, loadHotels, loadUniqHotel, loadUniqHotelComments } from '../store/actions';
import { Offer, Review } from './types';

export enum ActionType {
  LOAD_OFFERS = 'data/downloading-offers',
  LOAD_OFFER = 'data/downloading-offer',
  LOAD_COMMENTS = 'data/downloading-comments',
  REQUIRE_AUTHORIZATION = 'user/authorization-required',
  REQUIRE_LOGOUT = 'user/logout-required',
  INIT_OFFERS = 'data/init-offers',
  INIT_REVIEWS = 'data/init-reviews',
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
| ReturnType <typeof initOffers>
| ReturnType <typeof initReviews>
| ReturnType <typeof loadHotels>
| ReturnType <typeof loadUniqHotel>
| ReturnType <typeof requireAuthorization>
| ReturnType <typeof requireLogout>
| ReturnType <typeof loadUniqHotelComments>

export type State = {
  city: string,
  offers: Offer[],
  uniqOffer: Offer | null,
  comments: Review[] | null,
  sortedOffers: Offer[],
  sortName: string,
  reviews: Review[],
  filtredOffers: Offer[],
  authorizationStatus: AuthorizationStatus,
  authorizationEmail: string | undefined | null,
  isDataLoaded: boolean,
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;
export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
