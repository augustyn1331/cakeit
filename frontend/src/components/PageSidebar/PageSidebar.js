import React from "react";
import { Link } from "gatsby";
import SidebarMessage from "../SidebarMessage/SidebarMessage";
import pageIcon from "../../images/page-icon.svg";
import { Wrapper, Menu } from "./PageSidebar.styles";

const PageSidebar = ({ children, siblings, currentPageTitle, parentTitle }) => {
  const displayMessage = !children.nodes.length && !parentTitle;
  const getParentContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img src={pageIcon} alt="cakeit-page" />
        <span dangerouslySetInnerHTML={{ __html: currentPageTitle }} />
      </li>
      {children.nodes.map(item => (
        <li key={item.id}>
          <Link to={item.uri}>
            <span dangerouslySetInnerHTML={{ __html: item.title }} />
          </Link>
        </li>
      ))}
    </>
  );

  const getChildContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img src={pageIcon} alt="cakeit-page" />
        <span dangerouslySetInnerHTML={{ __html: parentTitle }} />
      </li>
      {siblings.map(item => (
        <li key={item.id}>
          <Link to={item.uri} activeClassName="sidebar-highlighted">
            <span dangerouslySetInnerHTML={{ __html: item.title }} />
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <Wrapper>
      {displayMessage ? (
        <SidebarMessage />
      ) : (
        <Menu>{!!parentTitle ? getChildContent() : getParentContent()}</Menu>
      )}
    </Wrapper>
  );
};

export default PageSidebar;
