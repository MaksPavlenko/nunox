import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

const CaseMain = ({ main }) => {
  console.log(main);
  const {
    titleUa,
    titleEn,
    titleIt,
    titleRu,
    prDescrUa,
    prDescrEn,
    prDescrIt,
    prDescrRu,
    aboutUa,
    aboutEn,
    aboutIt,
    aboutRu,
  } = main;
  return (
    <section className="case-main">
      <div className="case-main__wrapper">
        <span className="case-main__name">
          {useLanguage(titleUa, titleEn, titleIt, titleRu)}
        </span>
        <h1 className="case-main__title">
          {useLanguage(prDescrUa, prDescrEn, prDescrIt, prDescrRu)}
        </h1>
        <p className="case-main__descr">
          {useLanguage(aboutUa, aboutEn, aboutIt, aboutRu)}
        </p>
      </div>
    </section>
  );
};

CaseMain.propTypes = {
  main: PropTypes.object,
};

export default CaseMain;
