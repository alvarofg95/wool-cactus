import React, { lazy } from 'react';
import { ROUTES } from './constants';
const Home = lazy(() => import('pages/Home'));
const Store = lazy(() => import('pages/Store'));

export default [
  {
    path: ROUTES.HOME,
    component: (
      <Home
        metaTags={{ title: 'Cáctus de ganchillo', description: 'Loprem imposua asdnasjdas asd' }}
      />
    ),
    exact: true,
  },
  {
    path: ROUTES.STORE,
    component: (
      <Store
        metaTags={{
          title: 'Tienda de Cáctus de ganchillo',
          description: 'Loprem imposua asdnasjdas',
        }}
      />
    ),
  },
];
