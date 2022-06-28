import React from 'react';
import { useLanguage } from '../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const FooterServicesItem = ({ item }) => {
  return (
    <li className="footer-services__item">
      {useLanguage(item.titleUa, item.titleEn, item.titleIt, item.titleRu)}
    </li>
  );
};

FooterServicesItem.propTypes = {
  item: PropTypes.object,
};

export default FooterServicesItem;
