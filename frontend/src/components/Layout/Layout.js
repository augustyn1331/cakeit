import React, { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(prev => !prev);
  };
  return (
    <Wrapper>
      <Hamburger toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      <Header />
      <Primary
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
        {children}
        <Footer />
      </Primary>
    </Wrapper>
  );
};

export default Layout;

const Primary = styled(motion.main)`
  ${tw`
        pt-110 pb-150 lg:pb-120
    `}
`;
const Wrapper = styled.div`
  ${tw`
        relative min-h-screen
    `}
`;
