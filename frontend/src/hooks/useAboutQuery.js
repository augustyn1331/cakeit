import { useStaticQuery, graphql } from "gatsby";

export const useAboutQuery = () => {
  return useStaticQuery(graphql`
    query {
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
