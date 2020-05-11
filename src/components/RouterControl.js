import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'config/routes';

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}
    </Switch>
  </Suspense>
);
