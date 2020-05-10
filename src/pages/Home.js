import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'components/MetaTags';
// import CustomSlider from 'components/CustomSlider';

const Home = ({ metaTags }) => {
  return (
    <div>
      <MetaTags metaTags={metaTags} />
      <h1>Home</h1>
      {/* <CustomSlider /> */}
    </div>
  );
};

Home.propTypes = {
  metaTags: PropTypes.object.isRequired,
};

export default Home;
