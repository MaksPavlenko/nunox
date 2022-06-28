import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const CaseGallery = ({ images }) => {
  return (
    <section className="case-gallery__wrapper">
      <div className="case-gallery">
        {images.map((item, index) => {
          const img = getImage(item.localFile);
          return (
            <div className="case-gallery__item" key={index}>
              <GatsbyImage
                image={img}
                alt="img"
                className="case-gallery__item--image"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

CaseGallery.propTypes = {
  images: PropTypes.array,
};

export default CaseGallery;
