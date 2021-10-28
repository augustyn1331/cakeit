import React, { useState } from "react";
import { GlobalStyles, Primary, Wrapper } from "./Layout.styles";
import Hamburger from "../Hamburger/Hamburger";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };
  return (
    <Wrapper>
      <GlobalStyles />
      <Hamburger toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      <Header />
      <motion.main
        key={`motion-${Math.random(0, 99999)}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          default: { duration: 0.15 },
        }}
      >
        <Primary>{children}</Primary> <Footer />
      </motion.main>
    </Wrapper>
  );
};

export default Layout;
