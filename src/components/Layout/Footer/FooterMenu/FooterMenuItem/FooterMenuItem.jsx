import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const FooterMenuItem = ({ item }) => {
  return (
    <li className="footer-menu__item">
      <Link to={item.link} className="footer-menu__item--link">
        <span className="footer-menu__item--title">
          {useLanguage(
            item.title_ua,
            item.title_en,
            item.title_it,
            item.title_ru
          )}
        </span>
      </Link>
    </li>
  );
};

FooterMenuItem.propTypes = {
  item: PropTypes.object,
};

export default FooterMenuItem;
