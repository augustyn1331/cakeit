import React from "react";
import { Wrapper, StyledImg } from "./PageHero.styles";
const PageHero = ({ img }) => (
  <Wrapper>
    <StyledImg image={img} alt="Hero Image" />
  </Wrapper>
);

export default PageHero;
