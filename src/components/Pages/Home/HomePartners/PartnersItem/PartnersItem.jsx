import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const PartnersItem = ({ image }) => {
  const img = getImage(image);
  return (
    <div className="partners-item__wrapper">
      {img && (
        <GatsbyImage image={img} alt="img" className="partners-item__image" />
      )}
    </div>
  );
};

PartnersItem.propTypes = {
  image: PropTypes.object,
};

export default PartnersItem;
