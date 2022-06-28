import React from 'react';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const FooterContacts = ({ contacts }) => {
  const phone = useLanguage(
    contacts.phoneUa,
    contacts.phoneUa,
    contacts.phoneIt,
    contacts.phoneUa
  );

  return (
    <div className="footer-contacts__wrapper">
      <span className="footer-marker">
        {useLanguage('Контакти', 'Contacts', 'Contatti', 'Контакты')}
      </span>
      <ul className="footer-contacts">
        <li className="footer-contacts__item">
          <p className="footer-contacts__address">
            {useLanguage(
              contacts.addressUa,
              contacts.addressEn,
              contacts.addressIt,
              contacts.addressRu
            )}
          </p>
        </li>
        <li className="footer-contacts__item">
          <span className="footer-contacts__item--marker">
            {useLanguage('Тел:', 'No:', 'Tel:', 'Тел:')}
          </span>
          <a
            href={`tel:` + phone.toString().replace(/[- )(]/g, '')}
            className="footer-contacts__phone footer-contacts__link"
          >
            {phone}
          </a>
        </li>
        <li className="footer-contacts__item">
          <span className="footer-contacts__item--marker">
            {useLanguage('Mail:', 'Mail:', 'Mail:', 'Mail:')}
          </span>
          <a
            href={'mailto:' + contacts.mail}
            className="footer-contacts__mail footer-contacts__link"
          >
            {contacts.mail}
          </a>
        </li>
      </ul>
    </div>
  );
};

FooterContacts.propTypes = {
  contacts: PropTypes.object,
};

export default FooterContacts;
