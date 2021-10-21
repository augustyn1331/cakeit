import React from "react";
import { useQuoteQuery } from "../../hooks/useQuoteQuery";
import QuoteImg from "../../images/quote.svg";
import { Wrapper, Content } from "./Quote.styles";

const Quote = () => {
  const data = useQuoteQuery();
  const { citat1Author: text, citat1Text: header } = data.wpPage.ACF_HomePage;

  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="quote" />
        <h6>{header}</h6>
        <p>{text}</p>
      </Content>
    </Wrapper>
  );
};

export default Quote;
