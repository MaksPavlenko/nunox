import { useContext } from 'react';
import { I18nContext } from 'gatsby-plugin-react-i18next';

export const useLanguage = (ukr, eng, itl, rus) => {
  const {
    i18n: { language },
  } = useContext(I18nContext);

  if (language === 'ua') {
    return ukr;
  } else if (language === 'ru') {
    return rus;
  } else if (language === 'it') {
    return itl;
  } else {
    return eng;
  }
};
