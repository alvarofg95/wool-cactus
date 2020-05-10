import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'config/constants';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Inicio</Link>
        </li>
        <li>
          <Link to={ROUTES.STORE}>Tienda</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
