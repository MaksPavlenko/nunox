import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import DefoultCards from '../../../Ui/DefoultCards/DefoultCards';
import HomeFounderSocial from './HomeFounderSocial/HomeFounderSocial';

const HomeFounder = ({ main, titleData }) => {
  const langToglle = useLanguage;
  return (
    <section className="founder section" id="about">
      <div className="founder-title--wrapper">
        <h2 className="cases-title">
          {useLanguage(
            titleData.title_ua,
            titleData.title_en,
            titleData.title_it,
            titleData.title_ru
          )}
        </h2>
      </div>
      <div className="founder-card--container">
        <DefoultCards
          image={main.image.localFile}
          title={langToglle(main.nameUa, main.nameEn, main.nameIt, main.nameRu)}
          descr={langToglle(
            main.descrUa,
            main.descrEn,
            main.descrIt,
            main.descrRu
          )}
        />
        <HomeFounderSocial main={main} />
      </div>
    </section>
  );
};

HomeFounder.propTypes = {
  main: PropTypes.object,
  titleData: PropTypes.object,
};

export default HomeFounder;
