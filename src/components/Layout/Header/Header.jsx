import React from 'react';
import PropTypes from 'prop-types';
import useScroll from '../../../hooks/useScroll';

import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import Burger from './Burger/Burger';
import Navigation from './Navigation/Navigation';

const Header = ({ menu }) => {
  const [activeHeader, setActiveHeader] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  function openMenu() {
    setOpen(!open);
  }

  function closeMenu() {
    setOpen(false);
  }

  

  const changePosition = 60;
  let scroll = useScroll();

  if (scroll > changePosition && !activeHeader) {
    setActiveHeader(true);
  }

  if (scroll <= changePosition && activeHeader) {
    setActiveHeader(false);
  }

  return (
    <>
    <header className={activeHeader ? 'header is-active' : 'header'}>
      <Burger openMenu={openMenu} />
      <div className="page-wrapper">
        <div className="header-container">
          <HeaderLogo />
          <HeaderMenu menu={menu}  />
        </div>
      </div>
    </header>
    <Navigation menu={menu} closeMenu={closeMenu} open={open} />
    </>
  );
};

Header.propTypes = {
  menu: PropTypes.array,
};

export default Header;
