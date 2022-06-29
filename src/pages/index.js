import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { HomeMain } from '../components/Pages/Home';
import HomeCases from '../components/Pages/Home/HomeCases/HomeCases';
import HomePhilosophie from '../components/Pages/Home/HomePhilosophie/HomePhilosophie';
import HomeFounder from '../components/Pages/Home/HomeFounder/HomeFounder';
import HomeServices from '../components/Pages/Home/HomeServices/HomeServices';
import HomePartners from '../components/Pages/Home/HomePartners/HomePartners';

// import HomeTeam from '../components/Pages/Home/HomeTeam/HomeTeam';
import { homeStatic } from '../db/homeStatic';

const IndexPage = (data) => {
  // console.log(data.data);
  return (
    <Layout>
      <Seo
        title={useLanguage(
          'nunox: маркетингове агентство: Київ, Україна. (uk)',
          'nunox: marketing agency, Kyiv, Ukraine',
          'nunox: agenzia di marketing: Kiev, Ucraina',
          'nunox: маркетинговое агентство: Киев, Украина'
        )}
        description={useLanguage(
          'Створюємо та розвиваємо бренди. Володіючи власними бізнесами ми пропонуємо підприємцям наш досвід.',
          'We create and develop brands. By owning our own businesses, we offer entrepreneurs our experience.',
          'Creiamo e sviluppiamo marchi. Possedendo le nostre attività, offriamo agli imprenditori la nostra esperienza.',
          'Создаем и развиваем бренды. Владея собственными бизнесами, мы предлагаем предпринимателям наш опыт.'
        )}
      />
      <div className="page-wrapper">
        <HomeMain main={data.data.contentfulHomeMain} />
        <HomeCases
          titleData={homeStatic.casesHeader}
          card={data.data.allContentfulTemplateCases.nodes}
        />
        <HomePhilosophie main={data.data.allContentfulPhilosophy.nodes} />
        <HomeFounder
          titleData={homeStatic.founderHeader}
          main={data.data.contentfulFounder}
        />
        {/* <HomeTeam titleData={homeStatic.teamHeader} main={data.data.allContentfulTemplateCases.nodes}/> */}
        <HomeServices
          titleData={homeStatic.servicesHeader}
          servicesData={data.data.allContentfulServices.nodes}
        />
        <HomePartners
          titleData={homeStatic.partnersHeader}
          partnersData={data.data.contentfulPartners.img}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    contentfulHomeMain {
      titleEn {
        titleEn
      }
      titleIt {
        titleIt
      }
      titleRu {
        titleRu
      }
      titleUa {
        titleUa
      }
    }
    allContentfulTemplateCases {
      nodes {
        titleEn
        titleIt
        titleRu
        titleUa
        descrEn
        descrIt
        descrRu
        descrUa
        slug
        cover {
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
      }
    }
    allContentfulPhilosophy {
      nodes {
        titleUa
        titleEn
        titleIt
        titleRu
        descrUa
        descrRu
        descrIt
        descrEn
      }
    }
    contentfulFounder {
      nameEn
      nameIt
      nameRu
      nameUa
      descrUa
      descrRu
      descrIt
      descrEn
      link
      facebook
      instagram
      site
      image {
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
    }
    allContentfulServices {
      nodes {
        titleEn
        titleIt
        titleRu
        titleUa
      }
    }
    contentfulPartners {
      img {
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
        title
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
