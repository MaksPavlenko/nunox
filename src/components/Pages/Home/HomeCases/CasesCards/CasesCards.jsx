import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import DefoultCards from '../../../../Ui/DefoultCards/DefoultCards';

const CasesCards = ({ card }) => {
  const langToglle = useLanguage;

  return (
    <div className="cases-cards--wrapper">
      {card.map((item, index) => {
        return (
          <div className="cases-cards--container" key={index}>
            <Link to={`/${item.slug}/`} className="cases-cards__link">
              <DefoultCards
                title={langToglle(
                  item.titleUa,
                  item.titleEn,
                  item.titleIt,
                  item.titleRu
                )}
                descr={langToglle(
                  item.descrUa,
                  item.descrEn,
                  item.descrIt,
                  item.descrRu
                )}
                image={item.cover.localFile}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

CasesCards.propTypes = {
  card: PropTypes.array,
};

export default CasesCards;
