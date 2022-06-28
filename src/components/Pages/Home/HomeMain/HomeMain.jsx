import React from 'react';
import PropTypes from 'prop-types';
// import Responsive from '../../../Ui/Responsive/Responsive'
import HomeMainInfo from './HomeMainInfo/HomeMainInfo';

const HomeMain = ({ main }) => {
  return (
    <section className="home-main top-section">
      <div className="home-main__left"></div>
      <HomeMainInfo main={main} />
      {/* <Responsive /> */}
    </section>
  );
};

HomeMain.propTypes = {
  main: PropTypes.object,
};

export default HomeMain;
