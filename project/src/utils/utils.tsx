import Favorites from '../components/favorites/favorites';
import PrivateRoute from '../components/private-route';
import { Route } from 'react-router';
import leaflet, { DivIcon, Icon, IconOptions } from 'leaflet';
import { Offer, OfferDTO, RoutesProps } from '../types/types';

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
