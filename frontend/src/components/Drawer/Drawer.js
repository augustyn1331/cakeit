import React from "react";
import { Link } from "gatsby";
import InvertedLogo from "../../images/logo-inverted.svg";
import CloseButton from "../../images/close_btn.svg";
import { useMenuQuery } from "../../hooks/useMenuQuery";
import { StyledDrawer } from "./Drawer.styles";

const Drawer = ({ open, toggleDrawer }) => {
  const { menu } = useMenuQuery();

  return (
    <StyledDrawer open={open}>
      <div className="inner">
        <img className="invertedLogo" src={InvertedLogo} alt="white-logo" />
        <ul className="drawerMenu">
          {menu.menuItems.nodes.map(
            item =>
              !item.parentId && (
                <li key={item.id}>
                  <Link to={item.url} activeClassName="drawerActive">
                    {item.label}
                  </Link>
                </li>
              )
          )}
        </ul>
        <div
          className="closeButton"
          onClick={toggleDrawer}
          role="button"
          tabIndex="0"
          onKeyDown={toggleDrawer}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </StyledDrawer>
  );
};

export default Drawer;
