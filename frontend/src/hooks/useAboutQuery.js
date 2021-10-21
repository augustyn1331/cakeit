import { useStaticQuery, graphql } from "gatsby";

export const useAboutQuery = () => {
  return useStaticQuery(graphql`
    query AboutQuery {
      wpPage(databaseId: { eq: 47 }) {
        content
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `);
};
