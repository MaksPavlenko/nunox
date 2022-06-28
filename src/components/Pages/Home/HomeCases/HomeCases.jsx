import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import CasesCards from './CasesCards/CasesCards';

const HomeCases = ({ titleData, card }) => {
  return (
    <section className="cases section" id="cases">
      <div className="cases-title--wrapper">
        <h2 className="cases-title">
          {useLanguage(
            titleData.title_ua,
            titleData.title_en,
            titleData.title_it,
            titleData.title_ru
          )}
        </h2>
      </div>
      <CasesCards card={card} />
    </section>
  );
};

HomeCases.propTypes = {
  titleData: PropTypes.object,
  card: PropTypes.array,
};

export default HomeCases;
