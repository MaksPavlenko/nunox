const { languages, defaultLanguage } = require('./languages');
const siteUrl = `https://www.nunox.co`;

require('dotenv').config();
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Nunox`,
    description: `Створюємо та розвиваємо бренди. Володіючи власними бізнесами ми пропонуємо підприємцям наш досвід.`,
    author: `@nunox`,
    siteUrl: siteUrl,
  },
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_SSR: false,
    FAST_DEV: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [576, 768, 992, 1200, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e2e2e2`,
        theme_color: `#e2e2e2`,
        display: `minimal-ui`,
        icon: `src/images/icons/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: languages,
        defaultLanguage: defaultLanguage,
        fallbackLanguage: 'en',
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: siteUrl,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            // excludeLanguages: ['uk'],
          },
          {
            matchPath: '/preview',
            languages: ['uk'],
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     excludes: ['/**/404', '/**/404.html'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: `https://www.nunox.co`,
        sitemap: 'https://www.nunox.co/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-138246887-1', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-138246887-1",
    //     head: true,
    //   },
    // },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        downloadLocal: true,
        spaceId: `3t2awxrtdn10`,
        // spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        // host: `preview.contentful.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
