import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import {
  CaseMain,
  CaseInfo,
  CaseGallery,
  CaseVideo,
} from '../components/Pages/Case';

const CasePage = (data) => {
  console.log(data.data);

  const {
    seoTitleUa,
    seoTitleEn,
    seoTitleIt,
    seoTitleRu,
    seoDescrUa,
    seoDescrEn,
    seoDescrIt,
    seoDescrRu,
    videoFirst,
    videoSecond,
  } = data.data.contentfulTemplateCases;
  return (
    <Layout>
      <Seo
        title={useLanguage(seoTitleUa, seoTitleEn, seoTitleIt, seoTitleRu)}
        description={useLanguage(
          seoDescrUa,
          seoDescrEn,
          seoDescrIt,
          seoDescrRu
        )}
      />
      <div className="page-wrapper">
        <CaseMain main={data.data.contentfulTemplateCases} />
        {videoFirst !== '/' && <CaseVideo link={videoFirst} />}
        <CaseGallery images={data.data.contentfulTemplateCases.images} />
        {videoSecond !== '/' && <CaseVideo link={videoSecond} />}
        <CaseInfo info={data.data.contentfulTemplateCases} />
      </div>
    </Layout>
  );
};

export default CasePage;

export const query = graphql`
  query($language: String!, $id: String!) {
    contentfulTemplateCases(id: { eq: $id }) {
      id
      slug
      contentful_id
      seoTitleUa
      seoTitleEn
      seoTitleIt
      seoTitleRu
      seoDescrUa
      seoDescrEn
      seoDescrIt
      seoDescrRu
      titleEn
      titleIt
      titleRu
      titleUa
      prDescrUa
      prDescrEn
      prDescrIt
      prDescrRu
      aboutUa
      aboutEn
      aboutIt
      aboutRu
      videoFirst
      images {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
      videoSecond
      mainInfoUa {
        raw
      }
      mainInfoEn {
        raw
      }
      mainInfoIt {
        raw
      }
      mainInfoRu {
        raw
      }
    }
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
