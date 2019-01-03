import React from "react";
import { graphql } from "gatsby";
import { NewsIndex } from "../components";
 export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <>
      <h1>Latest news</h1>
      <NewsIndex posts={posts} />
    </>
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
            permalink
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;