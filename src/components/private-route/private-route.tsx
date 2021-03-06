import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { statusOfAuth } from '../../store/reducer/user/user-selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
 }

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, render } = props;
  const authStatus = useSelector(statusOfAuth);
  const isAuthorized = authStatus === AuthorizationStatus.AUTH;

  return (
    <Route
      exact={ exact }
      path={ path }
      render={ () => (
        isAuthorized
          ? render()
          : <Redirect to={ AppRoutes.SignIn } />
      ) }
    />
  );
}

export default PrivateRoute;
