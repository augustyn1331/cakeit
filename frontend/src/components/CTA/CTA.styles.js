import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`;

export const Wrapper = styled.div`
  max-height: 100px;
  position: relative;
  overflow: hidden;

  :hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }
  :hover p {
    text-shadow: 2px 2px #000;
    transition: text-shadow 0.3s !important;
  }

  @media (min-width: 768px) {
    max-height: 200px;
  }
`;

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CTAImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: "Teko";
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;
  text-shadow: 1px 1px #000;
  transition: text-shadow 0.3s !important;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
