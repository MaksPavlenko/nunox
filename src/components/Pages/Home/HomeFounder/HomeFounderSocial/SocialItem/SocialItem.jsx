import React from 'react';
import PropTypes from 'prop-types';

const SocialItem = ({ link, children }) => {
  return (
    <li className="founder-socials__item">
      <a href={link} target="blank" className="founder-socials__link">
        {children}
      </a>
    </li>
  );
};

SocialItem.propTypes = {
  link: PropTypes.string,
};

export default SocialItem;
