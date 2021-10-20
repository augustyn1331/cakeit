import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./Navigation.styles";

const Navigation = ({ menu }) => {
  const getNavItem = ({ parentId, url, id, label, childItems }) => {
    if (parentId) {
      return null;
    }
    const dropdown = !!childItems.nodes.length;
    return (
      <li key={id}>
        <Link to={url} activeClassName="nav-active">
          {label}
          {dropdown && <div>&#8964;</div>}
        </Link>
        {dropdown && (
          <ul>
            {childItems.nodes.map(item => (
              <li key={item.id}>
                <Link to={item.url} activeClassName="nav-active">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };
  return (
    <Wrapper>
      <ul>{menu.map(item => getNavItem(item))}</ul>
    </Wrapper>
  );
};

export default Navigation;
