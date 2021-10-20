import React from "react";
import { HamburgerButton } from "./Hamburger.styles";
import HamburgerIcon from "../../images/menu-icon.svg";
import PropTypes from "prop-types";

const Hamburger = ({ toggleDrawer }) => {
  return (
    <HamburgerButton onClick={toggleDrawer}>
      <img src={HamburgerIcon} alt="menu-hamburger" />
    </HamburgerButton>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};
