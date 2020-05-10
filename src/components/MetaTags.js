import React from 'react';
import { Helmet } from 'react-helmet';

export default ({ metaTags }) => {
  console.log({ metaTags });
  return (
    <Helmet>
      <title>{metaTags.title}</title>
      <meta name="description" content={metaTags.description} />;
    </Helmet>
  );
};
