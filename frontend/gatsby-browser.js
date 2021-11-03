import React from "react";
import { AnimatePresence } from "framer-motion";
import "./src/styles/globals.css";

export function wrapPageElement({ element, props }) {
  return (
    <AnimatePresence exitBeforeEnter {...props}>
      {element}
    </AnimatePresence>
  );
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  let TRANSITION_DELAY = 300;
  if (location.action === "PUSH") {
    let locationState = location.state?.noInitialAni || null;

    window.setTimeout(
      () =>
        window.scroll({
          left: 0,
          top: 0,
        }),
      locationState !== null ? 0 : 300
    );
  } else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];
    window.setTimeout(
      () => window.scrollTo(...savedPosition),
      TRANSITION_DELAY
    );
  }
  return false;
};
