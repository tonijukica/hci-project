//probat sa await i fetch, kasnije sa to module
const path = require("path");
 exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
   const postTemplate = path.resolve(`src/templates/NewsPost/index.js`);
   const coinTemplate = path.resolve('src/templates/Coin/index.js');
   return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: "/news/" + slug,
        component: postTemplate,
        context: {
          // additional data can be passed via context
          slug
        }
      });
    });
    return graphql(`
      {
        allPricesJson {
          edges {
            node{
              id
            }
          }
        }
      }
    `).then(result => {
      result.data.allPricesJson.edges.forEach(({node}) => {
        const { id } = node;
        createPage({
          path: '/coin/' + id, 
          component: coinTemplate,
          context: {
            id
          }
        })
      });
    });

  });
};
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "./src")]
    }
  });
};