import React from "react";
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery";
import { Wrapper } from "./CTAArea.styles";
import Cta from "../CTA/CTA";

const CtaArea = () => {
  const { cta } = useCTAAreaQuery();
  const filledArray = Array.from({ length: 3 }, (_, i) => (
    <Cta
      key={i}
      image={
        cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
          .gatsbyImageData
      }
      link={cta.ACF_HomePage[`cta${i + 1}Link`]}
      text={cta.ACF_HomePage[`cta${i + 1}Text`]}
    />
  ));
  return <Wrapper>{filledArray}</Wrapper>;
};

export default CtaArea;
