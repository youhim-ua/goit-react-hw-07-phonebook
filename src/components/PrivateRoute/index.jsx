import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthorized(state),
});

export default connect(mapStateToProps)(PrivateRoute);
