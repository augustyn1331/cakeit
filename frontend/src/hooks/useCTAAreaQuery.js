import { useStaticQuery, graphql } from "gatsby";

export const useCTAAreaQuery = () => {
  return useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, placeholder: TRACED_SVG)
        }
      }
    }
    query CTAAreaQuery {
      cta: wpPage(databaseId: { eq: 47 }) {
        id
        ACF_HomePage {
          cta1Link
          cta1Text
          cta2Link
          cta2Text
          cta3Link
          cta3Text
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }
        }
      }
    }
  `);
};
