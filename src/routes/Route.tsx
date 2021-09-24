import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  // Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  // isPrivate = false,
  component: Component,
  ...rest
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useAuth();
  /* eslint-disable indent */
  return (
    // <ReactDOMRoute
    //   {...rest}
    //   // eslint-disable-next-line arrow-body-style
    //   render={({ location }) => {
    //     return isPrivate === !!user ? (
    //       <Component />
    //     ) : (
    //       <Redirect
    //         to={{
    //           pathname: isPrivate ? '/' : '/map',
    //           state: { from: location },
    //         }}
    //       />
    //     );
    //   }}
    // />
    /* eslint-enable indent */

    <ReactDOMRoute {...rest} render={() => <Component />} />
  );
};

export default Route;
