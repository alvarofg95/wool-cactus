import React from 'react';
import PropTypes from 'prop-types';

const CustomImage = ({ src, width, className, description = 'Cactus' }) => (
  <img className={className} src={src} width={width} alt={description} />
);

CustomImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
};

export default CustomImage;
