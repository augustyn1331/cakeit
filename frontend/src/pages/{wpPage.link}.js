import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import PageHero from "../components/PageHero/PageHero";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import PageSidebar from "../components/PageSidebar/PageSidebar";

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px 16px 50px 16px;
`;
const ContentWrapper = styled.div`
  display: block;
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
const PageContent = styled.article`
  margin-top: 20px;
`;

const PageTemplate = ({ data }) => {
  const image =
    data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  const heroExists = !!data.wpPage.featuredImage;
  const parentNode = data.wpPage.wpParent?.node;
  const parentTitle = data.wpPage.wpParent?.node.title;
  const siblings = data.wpPage.wpParent?.node.wpChildren.nodes;
  const {
    wpChildren: children,
    content: currentPageContent,
    title: currentPageTitle,
  } = data.wpPage;

  return (
    <Layout>
      {heroExists && <PageHero img={image} />}
      <Wrapper>
        <BreadCrumb parent={parentNode} />
        <ContentWrapper>
          <PageSidebar
            siblings={siblings}
            currentPageTitle={currentPageTitle}
            parentTitle={parentTitle}
          >
            {children}
          </PageSidebar>
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: currentPageTitle }} />
            <div dangerouslySetInnerHTML={{ __html: currentPageContent }} />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`;
