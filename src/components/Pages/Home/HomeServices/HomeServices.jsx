import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

const HomeServices = ({ titleData, servicesData }) => {
  const langToggle = useLanguage;
  const { title_ua, title_en, title_it, title_ru } = titleData;
  return (
    <section className="home-services">
      <div className="home-services__wrapper">
        <h2 className="home-services__title">
          {langToggle(title_ua, title_en, title_it, title_ru)}
        </h2>
        <ul className="services-list">
          {servicesData.map((item, index) => {
            return (
              <li className="services-list__item" key={index}>
                <p className="services-list__title">
                  {langToggle(
                    item.titleUa,
                    item.titleEn,
                    item.titleIt,
                    item.titleRu
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

HomeServices.propTypes = {
  titleData: PropTypes.object,
  servicesData: PropTypes.array,
};

export default HomeServices;
