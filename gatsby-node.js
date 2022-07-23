const path = require('path');

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const { createRedirect } = actions;
  createRedirect({
    fromPath: 'https://www.nunox.co/it/firm',
    toPath: 'https://www.nunox.co/it/firmbarbershop/',
    isPermanent: true,
    force: true,
  });
  createRedirect({
    fromPath: 'https://www.nunox.co/en/haze',
    toPath: 'https://www.nunox.co/en/hazehairdressingbar/',
    isPermanent: true,
    force: true,
  });
  createRedirect({
    fromPath: 'https://www.nunox.co/en/street-food',
    toPath: 'https://www.nunox.co/en/ulichnayaeda/',
    isPermanent: true,
    force: true,
  });

  const generatePages = makeRequest(
    graphql,
    `
        {
          allContentfulTemplateCases {
            edges {
              node {
                id
                slug
                contentful_id
              }
            }
          }
        }
    `
  ).then((result) => {
    result.data.allContentfulTemplateCases.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}/`,
        component: path.resolve(`src/template/case.js`),
        context: {
          id: node.id,
        },
      });
    });
  });

  return Promise.all([generatePages]);
};
