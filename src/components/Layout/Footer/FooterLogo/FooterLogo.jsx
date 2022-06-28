import React from 'react';
import HeaderLogo from '../../Header/HeaderLogo/HeaderLogo';

import Behance from '../../../../svg/behance.svg';
import Facebook from '../../../../svg/facebook.svg';

const FooterLogo = () => {
  return (
    <div className="footer-logo__wrapper">
      <HeaderLogo />

      <ul className="footer-socials">
        <li className="footer-social__item">
          <a
            href="https://www.facebook.com/nunox.co/"
            target="blank"
            className="footer-social__link"
          >
            <Facebook className="footer-social__link--icon" />
          </a>
        </li>
        <li className="footer-social__item">
          <a
            href="https://www.behance.net/nunoxagency/"
            target="blank"
            className="footer-social__link"
          >
            <Behance className="footer-social__link--icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLogo;
