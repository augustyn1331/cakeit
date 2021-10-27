import React, { useState } from "react";
import { GlobalStyles, Primary, Wrapper } from "./Layout.styles";
import Hamburger from "../Hamburger/Hamburger";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
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
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{
          type: "linear",
          default: { duration: 0.35 },
        }}
      >
        <Primary>{children}</Primary> <Footer />
      </motion.main>
    </Wrapper>
  );
};

export default Layout;
