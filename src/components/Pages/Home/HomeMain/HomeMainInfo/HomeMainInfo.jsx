import React from 'react';
import { useLanguage } from '../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const HomeMainInfo = ({ main }) => {
  return (
    <div className="main-info">
      <h1 className="main-info__title">
        {useLanguage(
          main.titleUa.titleUa,
          main.titleEn.titleEn,
          main.titleIt.titleIt,
          main.titleRu.titleRu
        )}
      </h1>
    </div>
  );
};

HomeMainInfo.propTypes = {
  main: PropTypes.object,
};

export default HomeMainInfo;
