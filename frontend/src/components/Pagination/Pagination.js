import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./Pagination.styles";

const Pagination = ({ catUri, page, totalPages }) => {
  const getPrevious = () => {
    if (page <= 1) return null;
    if (page > 1)
      return (
        <Link to={`${catUri}${page === 2 ? "" : page - 1}`} className="back">
          Previous
        </Link>
      );
  };
  const getNext = () => {
    if (page >= totalPages) return null;
    if (page < totalPages)
      return (
        <Link to={`${catUri}${page + 1}`} className="forward">
          Next
        </Link>
      );
  };

  return (
    <>
      <h2>
        Navigation - Page {page} / {totalPages}
      </h2>
      <Wrapper isFirst={page === 1}>
        {getPrevious()}
        {getNext()}
      </Wrapper>
    </>
  );
};

export default Pagination;
