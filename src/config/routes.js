import React from 'react';
import { ROUTES } from './constants';
import Home from 'pages/Home';
import Store from 'pages/Store';

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
