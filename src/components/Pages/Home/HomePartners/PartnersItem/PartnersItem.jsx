import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

export const PartnersItem = ({ image, title }) => {
  const img = getImage(image);
  return (
    <div className="partners-item__wrapper">
      {img && (
        <GatsbyImage image={img} alt={title} className="partners-item__image" />
      )}
    </div>
  );
};

export const PartnersItemLink = ({ image, link, title }) => {
  const img = getImage(image);
  return (
    <a
      href={link}
      target="blank"
      className="partners-item__wrapper partners-item__wrapper--link"
    >
      {img && (
        <GatsbyImage image={img} alt={title} className="partners-item__image" />
      )}
    </a>
  );
};

PartnersItem.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
};

PartnersItemLink.propTypes = {
  image: PropTypes.object,
  link: PropTypes.string,
  title: PropTypes.string,
};
