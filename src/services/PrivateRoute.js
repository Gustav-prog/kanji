import { Route, Navigate } from 'react-router-dom';
import { isUserAuth } from './AuthService';

export { PrivateRoute };

function PrivateRoute({ component: Component, ...rest }) {
    const auth = isUserAuth();
    return (
        <Route {...rest} render={props => {
            if (!auth) {
                // not logged in so redirect to login page with the return url
                return <Navigate replace to="/" />
                //return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // authorized so return component
            return <Component {...props} />
        }} />
    );
}