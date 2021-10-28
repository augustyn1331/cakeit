import { useStaticQuery, graphql } from "gatsby";

export const useHeroQuery = () => {
  return useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 47 }) {
        id
        ACF_HomePage {
          heroText
          heroImage {
            localFile {
              publicURL
              extension
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `);
};
