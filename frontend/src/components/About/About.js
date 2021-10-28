import React from "react";
import { useAboutQuery } from "../../hooks/useAboutQuery";
import tw, { styled } from "twin.macro";
const About = () => {
  const data = useAboutQuery();
  const imageData = data.wpPage.featuredImage.node.localFile.publicURL;
  const content = data.wpPage.content;
  return (
    <Wrapper>
      <AboutImage image={imageData} />
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`
        grid grid-cols-1fr w-full text-center lg:grid-cols-2x1fr lg:text-left 
    `}
  .about-text {
    ${tw`
        px-7 py-6 md:p-8
    `}
    h1 {
      ${tw`
      pb-2 md:px-0 md:pb-0
     `}
    }
  }
`;

const AboutImage = styled.div`
  ${tw`
        bg-center bg-cover min-h-300
    `}
  background-image: ${({ image }) => `url(${image})`};
`;

export default About;
