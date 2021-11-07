import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
 }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render } = props;
  const authStatus = useSelector(({ authorizationStatus }) => authorizationStatus);

  return (
    <Route
      exact={ exact }
      path={ path }
      render={ () => (
        authStatus === AuthorizationStatus.AUTH
          ? render()
          : <Redirect to={ AppRoutes.SignIn } />
      ) }
    />
  );
}

export default PrivateRoute;
