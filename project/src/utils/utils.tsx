import { mockOffers  } from '../mock/offers';
import Favorites from '../components/favorites/favorites';
import PrivateRoute from '../components/private-route';
import { Route } from 'react-router';
import { AuthorizationStatus } from '../components/const';
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
