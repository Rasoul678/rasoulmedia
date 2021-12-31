import styled from "styled-components";

const { float } = window;

export const LottieWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Lottie = styled.div`
  height: 110%;
  width: 110%;

  svg {
    margin-${float}: -55% !important;
    margin-top: -50% !important;
  }
`;
