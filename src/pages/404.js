import * as React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import NotFound from '../components/Pages/NotFound/NotFound';

const NotFoundPage = () => (
  <Layout>
    <Seo
      title={useLanguage(
        '404: Сторінку не знайдено',
        '404: Page not found',
        '404 pagina non trovata',
        '404: Страницу не найдено'
      )}
    />
    <NotFound />
  </Layout>
);

export default NotFoundPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
