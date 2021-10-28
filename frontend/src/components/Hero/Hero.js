import React from "react";
import { getImage } from "gatsby-plugin-image";
import { useHeroQuery } from "../../hooks/useHeroQuery";
import tw, { styled } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery();
  const publicURL = data.heroImage.localFile.publicURL;
  const isSvg = data.heroImage.localFile.extension === "svg";

  console.log(
    data.heroImage.localFile.publicURL,
    data.heroImage.localFile.extension
  );

  const getHero = () => {
    if (isSvg) {
      return <StyledSVG src={publicURL} alt="Hero Image" />;
    }
    if (!isSvg) {
      return (
        <StyledImg
          image={getImage(data.heroImage.localFile)}
          alt="Hero Image"
        />
      );
    }
  };

  return (
    <Wrapper>
      {getHero()}
      <StyledH1>{parse(data.heroText)}</StyledH1>
    </Wrapper>
  );
};

export default Hero;

export const Wrapper = styled.div`
  ${tw`
        relative min-h-[calc(100vh - 110px)] flex flex-col justify-center items-center md:flex-row
    `}
`;

const StyledSVG = styled.img`
  ${tw`
  relative h-2/5 w-2/5 mx-16
    `}
`;

const StyledImg = styled(GatsbyImage)`
  ${tw`
 w-full mb-16
    `}
  max-height: 600px;
`;
const StyledH1 = styled.h1`
  ${tw`
  mx-16 text-center
    `}
  font-size: 2rem;
  font-weight: 600;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
