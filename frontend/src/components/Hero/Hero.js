import React, { useEffect, useRef, useState } from "react";
import { getImage } from "gatsby-plugin-image";
import { useHeroQuery } from "../../hooks/useHeroQuery";
import tw, { styled } from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import bg from "../../images/bg.svg";
import CakeSVG from "../../assets/cake.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const getHero = () => {
//   // if (isSvg) {
//   //   return <StyledSVG src={publicURL} alt="Hero Image" />;
//   // }
//   // if (!isSvg) {
//   //   return (
//   //     <StyledImg
//   //       image={getImage(data.heroImage.localFile)}
//   //       alt="Hero Image"
//   //     />
//   //   );
//   // }
//   // Getting svg from local files, it has special groups for animation
//   return <StyledSVG ref={cakeRef} />;
// };

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery();
  // const publicURL = data.heroImage.localFile.publicURL;
  // const isSvg = data.heroImage.localFile.extension === "svg";

  const triggerElement = useRef(null);
  const cakeRef = useRef(null);

  useEffect(() => {
    const balloons =
      cakeRef.current?.children[0].getElementsByClassName("balloons");
    const candles = cakeRef.current?.children[0].getElementById("candles");
    const people = cakeRef.current?.children[0].getElementById("people");
    const timeLine1 = gsap.timeline({});
    timeLine1
      .set([...balloons, candles, people], { autoAlpha: 0 })
      .fromTo(
        people,
        { autoAlpha: 0, x: "-=100" },
        { autoAlpha: 1, x: "0", duration: 1 }
      )
      .fromTo(
        candles,
        { autoAlpha: 0, y: "+=20" },
        { autoAlpha: 1, y: "0", duration: 0.6 }
      )
      .fromTo(
        balloons,
        { autoAlpha: 0, y: "+=100" },
        { autoAlpha: 1, y: "0", duration: 0.8 }
      );
  }, []);

  return (
    <Wrapper ref={triggerElement}>
      <StyledDiv>
        <div ref={cakeRef}>
          <StyledSVG />
        </div>
      </StyledDiv>
      <StyledDiv>
        <StyledH1>{parse(data.heroText)}</StyledH1>
      </StyledDiv>
      <StyledBackground src={bg} />
    </Wrapper>
  );
};

export default Hero;

export const Wrapper = styled.div`
  ${tw`relative min-h-[calc(100vh - 110px)] flex flex-col-reverse justify-center items-center md:flex-row`}
`;
const StyledDiv = styled.div`
  ${tw`flex items-center justify-center px-8`}
`;

const StyledBackground = styled.img`
  ${tw`absolute z-[-999] md:w-full max-w-none translate-y-[-250px] 2xl:translate-y-[-430px] object-cover`}
`;

const StyledSVG = styled(CakeSVG)`
  ${tw`relative min-w-[250px] w-[70vw] max-w-[300px] lg:w-auto lg:max-w-[100%] lg:max-h-[350px] 2xl:max-h-[400px]`}
`;
const StyledImg = styled(GatsbyImage)`
  ${tw` w-full mb-16 flex-1 max-h-[600px]`}
`;
const StyledH1 = styled.h1`
  ${tw` mr-4 ml-4 mb-[12vh] md:mb-0 p-4 text-left leading-tight normal-case text-[2.8rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] font-bold text-purple `}
  span {
    ${tw`text-red font-extrabold lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem]`}
  }
`;
