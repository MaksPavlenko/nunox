import React from 'react';
import PropTypes from 'prop-types';
import SocialItem from './SocialItem/SocialItem';

import Instagram from '../../../../../svg/instagram.svg';
import Facebook from '../../../../../svg/facebook_founder.svg';
import Site from '../../../../../svg/link.svg';

const HomeFounderSocial = ({ main }) => {
  const { instagram, facebook, site } = main;

  return (
    <ul className="founder-socials__list">
      <SocialItem link={instagram}>
        <Instagram className="founder-socials__icon" />
      </SocialItem>
      <SocialItem link={facebook}>
        <Facebook className="founder-socials__icon" />
      </SocialItem>
      <SocialItem link={site}>
        <Site className="founder-socials__icon" />
      </SocialItem>
    </ul>
  );
};

HomeFounderSocial.propTypes = {
  main: PropTypes.object,
};

export default HomeFounderSocial;
