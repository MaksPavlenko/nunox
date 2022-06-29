import React from 'react';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import { PartnersItem, PartnersItemLink } from './PartnersItem/PartnersItem';

const HomePartners = ({ titleData, partnersData }) => {
  const { title_ua, title_en, title_it, title_ru } = titleData;
  return (
    <section className="home-partners" id="partners">
      <div className="partners-title__wrapper">
        <h2 className="partners-title">
          {useLanguage(title_ua, title_en, title_it, title_ru)}
        </h2>
      </div>

      <div className="partners-items">
        {partnersData.map((item, index) => {
          if (item.title === 'firm') {
            return (
              <PartnersItemLink
                image={item.localFile}
                link={'https://firmbarbershop.com/'}
                title={item.title}
                key={index}
              />
            );
          } else {
            return (
              <PartnersItem
                image={item.localFile}
                title={item.title}
                key={index}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

HomePartners.propTypes = {
  titleData: PropTypes.object,
  partnersData: PropTypes.array,
};

export default HomePartners;
