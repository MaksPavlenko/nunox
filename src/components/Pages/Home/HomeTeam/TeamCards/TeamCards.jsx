import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import DefoultCards from '../../../../Ui/DefoultCards/DefoultCards';

const TeamCards = ({ main }) => {
  const langToglle = useLanguage;

  return (
    <div className="team-cards--wrapper">
      {main.map((item, index) => {
        return (
          <div className="team-cards--container" key={index}>
            <DefoultCards
              image={item.cover.localFile}
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
              // slug={item.slug}
            />
          </div>
        );
      })}
    </div>
  );
};

TeamCards.propTypes = {
  main: PropTypes.array
};

export default TeamCards;
