import React from 'react';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import FooterServicesItem from './FooterServicesItem/FooterServicesItem';

const FooterServices = ({ services }) => {
  return (
    <div className="footer-services__wrapper">
      <span className="footer-marker">
        {useLanguage('Послуги', 'Services', 'Servizi', 'Услуги')}
      </span>
      <ul className="footer-services">
        {services.map((item, index) => {
          return <FooterServicesItem item={item} key={index} />;
        })}
      </ul>
    </div>
  );
};

FooterServices.propTypes = {
  services: PropTypes.array,
};

export default FooterServices;
