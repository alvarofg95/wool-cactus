import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { ROUTES } from 'config/constants';
import CustomImage from './CustomImage';
import cactusImage from 'assets/cactus.svg';
import 'style/header.css';

const Header = ({ location, intl }) => {
  console.log({ location });
  return (
    <div id="header">
      <CustomImage src={cactusImage} width="40" />
      <div>
        <Link className={location.pathname === ROUTES.HOME ? 'active' : ''} to={ROUTES.HOME}>
          {intl.formatMessage({ id: 'header.home' })}
        </Link>
        <Link className={location.pathname === ROUTES.STORE ? 'active' : ''} to={ROUTES.STORE}>
          Tienda
        </Link>
      </div>
      <span>ES</span>
    </div>
  );
};

export default withRouter(injectIntl(Header));
