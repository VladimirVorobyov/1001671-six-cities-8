import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getAuthorization } from '../../store/authorization/selectors';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
};
function RedirectPrivate(props: PrivateRouteProps): JSX.Element {
  const status = useTypeSelector(getAuthorization);
  const { exact, path, render } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        status === AuthorizationStatus.NoAuth ? (
          render()
        ) : (
          <Redirect to={AppRoute.Main} />
        )}
    />
  );
}

export default RedirectPrivate;
