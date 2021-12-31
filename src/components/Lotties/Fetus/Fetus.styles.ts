import styled from "styled-components";

const { float } = window;

export const LottieWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Lottie = styled.div`
  height: 133%;
  width: 133%;

  svg {
    margin-${float}: -62% !important;
    margin-top: -63% !important;
  }
`;
