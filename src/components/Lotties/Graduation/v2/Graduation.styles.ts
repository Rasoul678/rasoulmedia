import styled from "styled-components";

const { float } = window;

export const LottieWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Lottie = styled.div`
  height: 200%;
  width: 200%;

  svg {
    margin-${float}: -75% !important;
    margin-top: -75% !important;
  }
`;