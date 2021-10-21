import styled from "styled-components";

export const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  height: 150px;
  @media screen and (min-width: 992px) {
    height: 120px;
  }
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #212121;
  color: #fff;
  text-align: center;
  z-index: 99999;

  p {
    margin: 0;
    padding: 0 16px;
    font-size: 0.8rem;
    @media screen and (min-width: 992px) {
      font-size: 0.85rem;
    }
  }
`;
