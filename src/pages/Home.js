import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'components/MetaTags';
import CustomSlider from 'components/CustomSlider';
import 'style/home.css';

const Home = ({ metaTags }) => {
  return (
    <div id="home">
      <MetaTags metaTags={metaTags} />
      <CustomSlider />
    </div>
  );
};

Home.propTypes = {
  metaTags: PropTypes.object.isRequired,
};

export default Home;
