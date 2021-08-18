import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Map from '../pages/Map';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Map} />

    <Route path="/map" component={Map} />
  </Switch>
);

export default Routes;
