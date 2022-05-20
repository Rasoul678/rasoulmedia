import styled from "styled-components";

const { float } = window;

export const FooterContainer = styled.div`
  position: relative;
  text-align: center;
  background: transparent;
  margin-top: 5rem;
`;

export const FooterWaves = styled.svg`
  position: absolute;
  ${float}: 0;
  width: 100%;
  height: 7rem;
  //! Fix for safari gap
  margin-bottom: -0.5rem;
  min-height: 7rem;
  bottom: -9.5rem;

  @media (max-width: 1000px) {
    height: 6.5rem;
    min-height: 6.5rem;
  }

  @media (max-width: 700px) {
    height: 5.5rem;
    min-height: 5.5rem;
  }

  //! Shrinking for mobile
  @media (max-width: 550px) {
    height: 5rem;
    min-height: 5rem;
  }
`;

export const FooterParallax = styled.g`
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  //! Animation
  use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
    fill: ${({ theme }) => theme.border};
    opacity: 0.5;
  }
  > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
    fill: ${({ theme }) => theme.border};
    opacity: 0.4;
  }
  > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
    fill: ${({ theme }) => theme.border};
    opacity: 0.3;
  }
  > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
    fill: ${({ theme }) => theme.border};
    opacity: 0.2;
  }
`;

export const SeaCreaturesWrapper = styled.div`
  position: absolute;
  bottom: -9rem;
  width: 100%;
  z-index: 100;

  @media (min-width: 550px) {
    top: -1.5rem;
  }

  div:nth-child(1) {
    width: 4rem;
    height: 4rem;
    position: absolute;
    bottom: 0;
    ${float}: 5%;
    transform: rotateY(180deg);
  }

  div:nth-child(2) {
    width: 4rem;
    position: absolute;
    bottom: -1rem;
    ${float}: 30%;
    transform: rotateY(180deg);
  }

  div:nth-child(3) {
    width: 3rem;
    position: absolute;
    bottom: -1rem;
    ${float}: 55%;
  }

  div:nth-child(4) {
    width: 5rem;
    position: relative;
    bottom: -1rem;
    ${float}: 70%;
  }
`;

export const FooterText = styled.div`
  text-align: center;
  position: absolute;
  bottom: -10rem;
  ${float}: 0;
  color: #000;
  font-weight: 500;
  font-size: 0.8rem;
  z-index: 10;
  width: 100%;

  @media only screen and (min-width: 550px) {
    bottom: -10rem;
  }
`;
