import { mockOffers  } from '../mock/offers';
import Favorites from '../components/favorites/favorites';
import PrivateRoute from '../components/private-route';
import { Route } from 'react-router';
import { AuthorizationStatus, Modificator } from '../components/const';
import leaflet, { DivIcon, Icon, IconOptions } from 'leaflet';


type RoutesProps = {
  route: string,
  isPrivate: boolean,
  component: () => JSX.Element,
 }

export const generateRoutes = ({ route, component, isPrivate }: RoutesProps): JSX.Element => isPrivate ?
  <PrivateRoute exact path={ route } key={ route } authorizationStatus={ AuthorizationStatus.AUTH } render={ () => <Favorites offers={ mockOffers }/> } /> :
  <Route exact path={ route } key={ route } component={ component } />;

const RatingToPercent = {
  DIVIDER: 5,
  MULTIPLIER: 100,
};

export const transformRating = (rating: number): string => `${ rating / RatingToPercent.DIVIDER * RatingToPercent.MULTIPLIER }%`;

const ICON_WIDTH = 40;
const ICON_HEIGHT = 13;

export const iconChanger = (change: string): Icon<IconOptions> | DivIcon => leaflet.icon({
  iconUrl: change,
  iconSize: [ICON_HEIGHT * 2, ICON_WIDTH],
  iconAnchor: [ICON_HEIGHT, ICON_WIDTH],
});

export const articleClass = (param: string): string=> {
  if (param === Modificator.PROPERTIES) {
    return 'near-places__card place-card';
  }
  if (param === Modificator.FAVORITES) {
    return 'favorites__card place-card';
  }
  return 'cities__place-card place-card';
};

export const imageWrapper = (param: string): string => {
  if (param === Modificator.PROPERTIES) {
    return 'near-places__image-wrapper place-card__image-wrapper';
  }
  if (param === Modificator.FAVORITES) {
    return 'favorites__image-wrapper place-card__image-wrapper';
  }
  return 'cities__image-wrapper place-card__image-wrapper';
};
