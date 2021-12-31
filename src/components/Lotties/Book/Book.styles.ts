import styled from "styled-components";

const { float } = window;

export const LottieWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Lottie = styled.div`
  height: 90%;
  width: 90%;

  svg {
    margin-${float}: -45% !important;
    margin-top: -45% !important;
  }
`;
