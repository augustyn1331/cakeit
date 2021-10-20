import { useStaticQuery, graphql } from "gatsby";

export const useMenuQuery = () => {
  return useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
      menu: wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                id
              }
            }
          }
        }
      }
    }
  `);
};
