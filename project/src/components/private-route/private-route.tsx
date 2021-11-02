import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useTypeSelector } from '../../hooks/useTypeSelector';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
}
function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const status = useTypeSelector((state) => state.authorizationStatus);
  const {exact, path, render} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        status === AuthorizationStatus.Auth ? (
          render()
        ) : (
          <Redirect to={AppRoute.SignIn} />
        )}
    />
  );
}

export default PrivateRoute;
