import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../hooks/useLanguage';

import Language from '../../../Ui/Language/Language';

const Navigation = ({ closeMenu, menu, open }) => {
  const langToggle = useLanguage;

  return (
    <div className={open ? 'navigation-mob is-open' : 'navigation-mob'}>
      <nav className="navigation_mob-wrapper">
        <ul className="navigation_mob-list">
          {menu.map((item, index) => {
            return (
              <li
                className="navigation_mob-item"
                key={index}
                role="presentation"
                onClick={closeMenu}
              >
                <Link to={item.link} className="navigation_mob-link">
                  {langToggle(
                    item.title_ua,
                    item.title_en,
                    item.title_it,
                    item.title_ru
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <Language />
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  closeMenu: PropTypes.func,
  menu: PropTypes.array,
  open: PropTypes.bool,
};

export default Navigation;
