module.exports = {
    siteMetadata: {
      title: "My first Gatsby application",
      description: "Hello, World!"
    },
     plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/posts`,
          name: "posts"
        }
      },
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-images",
              options: {
                maxWidth: 1000,
                linkImagesToOriginal: false,
                backgroundColor: "transparent"
              }
            }
          ]
        }
      },
      `gatsby-transformer-json`,
      {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/prices`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`)
      }
    },
    {
      resolve: "gatsby-plugin-create-client-paths",
      options: { prefixes: ["/private/*"] }
    }
    ]
  };