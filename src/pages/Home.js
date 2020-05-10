import React from 'react';
import MetaTags from 'components/MetaTags';

export default ({ metaTags }) => {
  return (
    <div>
      <MetaTags metaTags={metaTags} />
      <h1>Home</h1>
    </div>
  );
};
