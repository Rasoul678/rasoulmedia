import styled from "styled-components";

const { float } = window;

export const LottieWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Lottie = styled.div`
  height: 150%;
  width: 150%;

  svg {
    margin-${float}: -66% !important;
    margin-top: -73% !important;
  }
`;