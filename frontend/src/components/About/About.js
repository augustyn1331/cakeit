import React from "react";
import { useAboutQuery } from "../../hooks/useAboutQuery";
import { Wrapper, AboutImage } from "./About.styles";

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

export default About;
