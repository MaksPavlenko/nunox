import * as React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Header, Footer } from './index';

import { menuData, footerMenu } from '../../db/menuData';

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          allContentfulFoterServices {
            nodes {
              titleEn
              titleIt
              titleRu
              titleUa
            }
          }
          contentfulContacts {
            addressUa
            addressEn
            addressIt
            addressRu
            mail
            phoneUa
            phoneIt
          }
        }
      `}
      render={(data) => (
        <div className="app-container">
          <Header menu={menuData} />
          <main>{children}</main>
          <Footer
            menu={footerMenu}
            footerServices={data.allContentfulFoterServices.nodes}
            contacts={data.contentfulContacts}
          />
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contacts: PropTypes.object,
};

export default Layout;
