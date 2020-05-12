import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {injectIntl} from 'react-intl';
import {ROUTES} from 'config/constants';
import CustomImage from './CustomImage';
import cactusImage from 'assets/cactus.svg';
import 'style/header.css';

const Header = ({language, location, intl, onChangeLanguage}) => {
  return (
    <div id="header">
      <Link to={ROUTES.HOME}>
        <CustomImage src={cactusImage} width="40" />
      </Link>
      <div>
        <Link className={location.pathname === ROUTES.HOME ? 'active' : ''} to={ROUTES.HOME}>
          {intl.formatMessage({id: 'header.home'})}
        </Link>
        <Link className={location.pathname === ROUTES.STORE ? 'active' : ''} to={ROUTES.STORE}>
          {intl.formatMessage({id: 'header.store'})}
        </Link>
      </div>
      <span onClick={onChangeLanguage}>{language}</span>
    </div>
  );
};

export default withRouter(injectIntl(Header));
