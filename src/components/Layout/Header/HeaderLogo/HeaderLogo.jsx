import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

import Logo from '../../../../svg/logo.svg';

const HeaderLogo = () => (
  <>
    <Link to="/" className="logo-link">
      <Logo className="logo" />
    </Link>
    <Link to="/" className="logo-link--mob">
      <div className="logo--mob">nunox</div>
    </Link>
  </>
);

export default HeaderLogo;
