import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaTags = ({ metaTags }) => (
  <Helmet>
    <title>{metaTags.title}</title>
    <meta name="description" content={metaTags.description} />;
  </Helmet>
);

MetaTags.propTypes = {
  metaTags: PropTypes.object.isRequired,
};

export default MetaTags;
