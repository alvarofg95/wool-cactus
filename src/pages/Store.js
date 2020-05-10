import React from 'react';
import MetaTags from 'components/MetaTags';

const Store = ({ metaTags }) => {
  return (
    <div>
      <MetaTags metaTags={metaTags} />
      <h1>Store</h1>
    </div>
  );
};

export default Store;
