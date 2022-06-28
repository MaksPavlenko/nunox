import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';
import { useLanguage } from '../../../../hooks/useLanguage';
// import { scroller } from 'react-scroll';

import Language from '../../../Ui/Language/Language';

const HeaderMenu = ({ menu }) => {
  const langToggle = useLanguage;

  // function scrollToSection() {
  //   scroller.scrollTo(menu.link, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // }

  // console.log(menu.link);
  return (
    <nav className="navigation-wrapper">
      <ul className="navigation-list">
        {menu.map((item, index) => {
          return (
            <li className="navigation-item" key={index}>
              <Link
                to={item.link}
                className="navigation-link"
                // onClick={scrollToSection}
              >
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
  );
};

HeaderMenu.propTypes = {
  menu: PropTypes.array,
};

export default HeaderMenu;
