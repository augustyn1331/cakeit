import React, { useState } from "react";
import { GlobalStyles, Primary } from "./Layout.styles";
import Hamburger from "../Hamburger/Hamburger";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };
  return (
    <>
      <GlobalStyles />
      <Hamburger toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      <Header />
      <Primary>{children}</Primary>
      <Footer />
    </>
  );
};

export default Layout;
