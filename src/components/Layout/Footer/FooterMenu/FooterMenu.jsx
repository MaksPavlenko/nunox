import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import FooterMenuItem from './FooterMenuItem/FooterMenuItem';

const FooterMenu = ({ menu }) => {
  return (
    <div className="footer-menu__wrapper">
      <span className="footer-marker">
        {useLanguage('Навігація', 'Navigation', 'Navigazione', 'Навигация')}
      </span>
      <ul className="footer-menu">
        {menu.map((item, index) => {
          return <FooterMenuItem key={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

FooterMenu.propTypes = {
  menu: PropTypes.array,
};

export default FooterMenu;
