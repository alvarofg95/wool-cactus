import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'react-intl';
import {Link} from 'react-router-dom';
import MetaTags from 'components/MetaTags';
import CustomSlider from 'components/CustomSlider';
import 'style/home.css';
import {ROUTES} from 'config/constants';

const Home = ({metaTags, intl}) => {
  return (
    <div id="home">
      <MetaTags metaTags={metaTags} />
      <h1 className="title">{intl.formatMessage({id: 'home.title'})}</h1>
      <CustomSlider />
      <p className="description">{intl.formatMessage({id: 'home.description'})}</p>
      <p className="visitStore">
        {intl.formatMessage(
          {id: 'home.visitStore'},
          {
            a: (...chunks) => <Link to={ROUTES.STORE}>{chunks}</Link>
          }
        )}
      </p>
    </div>
  );
};

Home.propTypes = {
  metaTags: PropTypes.object.isRequired
};

export default injectIntl(Home);
