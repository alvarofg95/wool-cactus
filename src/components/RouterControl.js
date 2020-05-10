import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'config/routes';

export default () => (
  <Switch>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} exact={route.exact}>
        {route.component}
      </Route>
    ))}
  </Switch>
);
