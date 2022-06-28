import React from 'react';
import PropTypes from 'prop-types';
import FooterLogo from './FooterLogo/FooterLogo';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterServices from './FooterServices/FooterServices';
import FooterContacts from './FooterContacts/FooterContacts';

const Footer = ({ menu, footerServices, contacts }) => {
  return (
    <footer className="footer" id="contacts">
      <div className="page-wrapper">
        <div className="footer-items">
          <FooterLogo />
          <FooterMenu menu={menu} />
          <FooterServices services={footerServices} />
          <FooterContacts contacts={contacts} />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  menu: PropTypes.array,
  footerServices: PropTypes.array,
  contacts: PropTypes.object,
};

export default Footer;
