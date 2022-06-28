import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

const HomePhilosophie = ({ main }) => {
  const langToglle = useLanguage;

  return (
    <section className="philosophi section" id="philosophie">
      <div className="philosophi-wrapper">
        {main.map((item, index) => {
          return (
            <div className="philosophi-contaiter" key={index}>
              <div className="philosophi-title--contaiter">
                <h2 className="philosophi-title">
                  {langToglle(
                    item.titleUa,
                    item.titleEn,
                    item.titleIt,
                    item.titleRu
                  )}
                </h2>
              </div>
              <div className="philosophi-descr--contaiter">
                <p className="philosophi-descr">
                  {langToglle(
                    item.descrUa,
                    item.descrEn,
                    item.descrIt,
                    item.descrRu
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

HomePhilosophie.propTypes = {
  main: PropTypes.array,
};

export default HomePhilosophie;
