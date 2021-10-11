import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {AppFilms, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {path, exact, component, authorizationStatus, children} = props;
  return (
    <Route exact={exact} path={path} component={component}>
      {
        authorizationStatus === AuthorizationStatus.Auth ? (children) : (<Redirect to={AppFilms.SignIn} />)
      }
    </Route>
  );
}

export default PrivateRoute;
