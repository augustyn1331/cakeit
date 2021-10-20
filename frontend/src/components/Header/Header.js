import React from "react";
import { Link } from "gatsby";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";
import { useMenuQuery } from "../../hooks/useMenuQuery";
import { Wrapper, Content } from "./Header.styles";

const Header = () => {
  const { site, menu } = useMenuQuery();
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={logo} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  );
};

export default Header;
