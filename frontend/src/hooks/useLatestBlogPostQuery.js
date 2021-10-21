import { useStaticQuery, graphql } from "gatsby";

export const useLatestBlogPost = () => {
  return useStaticQuery(graphql`
    query LatestBlogPostQuery {
      posts: allWpPost(sort: { fields: date, order: DESC }, limit: 1) {
        edges {
          node {
            title
            excerpt
            uri
          }
        }
      }
    }
  `);
};
