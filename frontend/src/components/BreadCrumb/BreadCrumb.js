import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./BreadCrumb.styles";

const BreadCrumb = ({ parent }) => {
  const getParentContent = () => {
    if (!parent) return null;
    return (
      <>
        <Link to={parent.uri}>
          <span dangerouslySetInnerHTML={{ __html: parent.title }} />
        </Link>
        <span className="divider">/</span>
      </>
    );
  };

  return (
    <Wrapper>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span className="divider">/</span>
      {getParentContent()}
    </Wrapper>
  );
};

export default BreadCrumb;
