import React from "react";
import { Link } from "gatsby";
import { useLatestBlogPost } from "../../hooks/useLatestBlogPostQuery";
import { Wrapper } from "./LatesBlogPost.styles";

const LatestBlogPost = () => {
  const data = useLatestBlogPost();
  const { title, excerpt, uri } = data.posts.edges[0].node;
  return (
    <Wrapper>
      <h1>Latest Blog Post</h1>
      <h4>{title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
      <Link to={`/blog${uri}`}>
        <h5>Read More</h5>
      </Link>
    </Wrapper>
  );
};

export default LatestBlogPost;
