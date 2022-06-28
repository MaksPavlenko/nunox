import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ openMenu }) => {
  return (
    <button className="burger" onClick={openMenu} aria-label="open menu">
      <span className="burger__line line-1"></span>
      <span className="burger__line line-2"></span>
      <span className="burger__line line-3"></span>
    </button>
  );
};

Burger.propTypes = {
  openMenu: PropTypes.func,
};

export default Burger;
