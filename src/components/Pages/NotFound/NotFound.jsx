import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="page-wrapper">
        <div className="not-found__content">
          <span className="not-found__marker">404</span>
          <h1 className="not-found__title">
            {useLanguage(
              'Нажаль сторінку не знайдено',
              'Unfortunately, the page was not found',
              'Purtroppo la pagina non è stata trovata',
              'К сожалению страница не найдена'
            )}
          </h1>
          <Link to="/" className="not-found__link">
            <span className="not-found__link--title">
              {useLanguage(
                'На головну',
                'To main',
                'Al principale',
                'На главную'
              )}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
