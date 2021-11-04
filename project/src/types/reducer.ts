import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { AuthorizationStatus } from '../const';
import { changeCity, sortOffers, changeSortName, filterOffers, initOffers, initReviews, loadOffers, requireAuthorization, requireLogout } from '../store/action';
import { Offer, Review } from './types';

export enum ActionType {
  LOAD_OFFERS = 'data/downloading-offers',
  REQUIRED_AUTHORIZATION = 'user/authorization-required',
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
| ReturnType <typeof loadOffers>
| ReturnType <typeof requireAuthorization>
| ReturnType <typeof requireLogout>

export type State = {
  city: string,
  offers: Offer[],
  sortedOffers: Offer[],
  sortName: string,
  reviews: Review[],
  filtredOffers: Offer[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
