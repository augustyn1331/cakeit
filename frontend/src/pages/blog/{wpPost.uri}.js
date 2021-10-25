import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../../components/Layout/Layout";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import PostSidebar from "../../components/PostSidebar/PostSidebar";

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`;
const PostContent = styled.article`
  margin-top: 20px;
`;

const PostTemplate = ({ data }) => {
  const { content, title, date, categories, author } = data.post;
  return (
    <Layout>
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/blog/all-posts",
            title: "blog",
          }}
        />
        <ContentWrapper>
          <PostSidebar
            date={date}
            author={author.node.name}
            categories={categories.nodes}
          />
          <PostContent>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </PostContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`;
