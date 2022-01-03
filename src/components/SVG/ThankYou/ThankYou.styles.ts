import styled from "styled-components";

const { direction } = window;

export const ThankImg = styled.img`
  display: inline-block;
  width: 55%;
  opacity: 0.8;
  transform: rotateY(${direction === "ltr" ? "180deg" : "0deg"});
`;
