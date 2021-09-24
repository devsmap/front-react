import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Map from '../pages/Map';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" isPrivate={false} exact component={Map} />

    <Route path="/map" isPrivate={false} component={Map} />
  </Switch>
);

export default Routes;
