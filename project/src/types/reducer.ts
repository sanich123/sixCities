import { changeCity, setOffers, sortOffers, changeSortName, filterOffers, initOffers, initReviews } from '../store/action';
import { Offer, Review } from './types';

export enum ActionType {
  INIT_OFFERS = 'data/init-offers',
  INIT_REVIEWS = 'data/init-reviews',
  CHANGE_CITY = 'data/change-city',
  SET_OFFERS = 'data/set-offers',
  SORT_OFFERS = 'data/sort-offers',
  FILTER_OFFERS = 'data/filter-offers',
  CHANGE_SORT = 'data/change-sort-name',
}

export type Actions =
| ReturnType <typeof changeCity>
| ReturnType <typeof setOffers>
| ReturnType <typeof sortOffers>
| ReturnType <typeof changeSortName>
| ReturnType <typeof filterOffers>
| ReturnType <typeof initOffers>
| ReturnType <typeof initReviews>


export type State = {
  city: string,
  offers: Offer[],
  sortedOffers: Offer[],
  sortName: string,
  reviews: Review[],
  filtredOffers: Offer[],
}
