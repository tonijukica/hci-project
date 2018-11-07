import React from "react";
import { graphql } from "gatsby";
import { Layout, NewsIndex } from "../components";
 export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <Layout>
      <h1>News posts</h1>
      <NewsIndex posts={posts} />
    </Layout>
  );
};
 export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;