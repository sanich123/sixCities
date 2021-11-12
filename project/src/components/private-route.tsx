import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../const';
import { statusOfAuth } from '../utils/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
 }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render } = props;
  const authStatus = useSelector(statusOfAuth);

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
