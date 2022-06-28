import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const DefoultCards = ({ image, title, descr }) => {
  const langToglle = useLanguage;
  const img = getImage(image);

  return (
    <div className="cards-wrapper">
      <div className="card-image">
        <GatsbyImage image={img} alt="img" />
      </div>
      <div className="cards-bottom">
        <div className="card-title">{title}</div>
        <p className="card-description">{descr}</p>
        <span className="card-btn">
          {langToglle('детальніше', 'more', 'Di più', 'подробнее')}
        </span>
      </div>
    </div>
  );
};

DefoultCards.propTypes = {
  title: PropTypes.string,
  descr: PropTypes.string,
};

export default DefoultCards;
