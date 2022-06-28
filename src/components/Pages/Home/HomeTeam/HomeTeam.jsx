import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import TeamCards from './TeamCards/TeamCards';

const HomeTeam = ({titleData, main}) => {
  const langToglle = useLanguage;

  return (
    <section className='team section'>

<div className="founder-title--wrapper">
        <h1 className="cases-title">
          {langToglle(
            titleData.title_ua,
            titleData.title_en,
            titleData.title_it,
            titleData.title_ru
          )}
        </h1>
      </div>
      <TeamCards main={main} />
      <h1>МАКС ДОБАВЬ КОМАНДУ В ЗАПРОС АТО НЕЗНАЮ СКОЛЬКО ЛЮДЕЙ
      </h1>
    </section>
  );
};

HomeTeam.propTypes = {
  main: PropTypes.object,
  titleData: PropTypes.object,
};

export default HomeTeam;