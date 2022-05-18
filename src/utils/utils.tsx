import Favorites from '../components/favorites/favorites';
import PrivateRoute from '../components/private-route/private-route';
import { Route } from 'react-router';
import leaflet, { DivIcon, Icon, IconOptions } from 'leaflet';
import { Offer, OfferDTO, RoutesProps } from '../types/types';
import { months, sortTypes } from '../const';

export const generateRoutes = ({ route, component, isPrivate }: RoutesProps): JSX.Element =>
  isPrivate ?
    <PrivateRoute exact path={ route } key={ route } render={ () => <Favorites /> } /> :
    <Route exact path={ route } key={ route }>{ component }</Route>;

const RatingToPercent = {
  Divider: 5,
  Multiplier: 100,
} as const;

export const transformRating = (rating: number): string => `${ rating / RatingToPercent.Divider * RatingToPercent.Multiplier }%`;

const ICON_WIDTH = 40;
const ICON_HEIGHT = 13;
const ICON_HEIGHT2 = 26;

export const iconChanger = (change: string): Icon<IconOptions> | DivIcon => leaflet.icon({
  iconUrl: change,
  iconSize: [ICON_HEIGHT2, ICON_WIDTH],
  iconAnchor: [ICON_HEIGHT, ICON_WIDTH],
});

export const adaptOffer = (offer: OfferDTO): Offer => ({
  ...offer,
  host: {
    ...offer.host,
    isPro: offer.host['is_pro'],
    avatarUrl: offer.host['avatar_url'],
  },
  isFavorite: offer['is_favorite'],
  isPremium: offer['is_premium'],
  maxAdults: offer['max_adults'],
  previewImage: offer['preview_image'],
});

export const dateFormatter = (date: string): string => `${ months[(new Date(date).getMonth())] } ${ new Date(date).getFullYear() }`;

const sortByPriceLow = (array: Offer[]): Offer[] => array.slice().sort((priceA, priceB) => priceA.price - priceB.price);
const sortByPriceHigh = (array: Offer[]): Offer[] => array.slice().sort((priceA, priceB) => priceB.price - priceA.price);
const sortByRating = (array: Offer[]): Offer[] => array.slice().sort((ratingA, ratingB) => ratingB.rating - ratingA.rating);

export const sortTypeChanger = {
  [sortTypes.PriceLow]: (offers: Offer[]): Offer[] => sortByPriceLow(offers),
  [sortTypes.PriceHigh]: (offers: Offer[]): Offer[]  => sortByPriceHigh(offers),
  [sortTypes.TopRated]: (offers: Offer[]): Offer[]  => sortByRating(offers),
  [sortTypes.Popular]: (offers: Offer[]): Offer[]  => offers,
};
