import styled from "styled-components";
import { Breakpoints } from "constants/Global";
import { motion } from "framer-motion";

const { revFloat, direction } = window;

export const HomeGalleryContainer = styled.div`
  height: 100vh;
  position: relative;

  .typing {
    font-size: 1.8rem;

    @media only screen and (min-width: 650px) {
      font-size: 2rem;
    }
  }

  .cursor {
    font-size: 2rem;
  }

  .Typewriter {
    z-index: 100;
    text-align: center;

    @media (max-width: ${Breakpoints.mobile}px) {
      top: 40%;
    }
  }

  .gallery-canvas {
    position: absolute !important;
  }
`;

export const IntroductionContainer = styled(motion.div)`
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100%;
  padding: 2rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (min-width: 650px) {
    img {
      width: 10rem;
      margin-top: 0rem;
    }

    > div:first-child {
      min-width: 11rem;
      min-height: 11rem;
      margin-${revFloat}: 2.5rem; 
    }
  }
`;

export const IntroductionInfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  margin-top: 3rem;

  @media only screen and (max-width: 650px) {
    margin-top: 7rem;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const UserNameWrapper = styled(motion.h2)`
  z-index: 100;
  font-size: 2rem;

  @media only screen and (min-width: 650px) {
    font-size: 2.5rem;
  }
`;

export const TypeWriterWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export const ArrowDownWrapper = styled(motion.div)`
  width: 4rem;
  position: absolute;
  bottom: 0;
  left: calc(50% - 2rem);
  cursor: pointer;
  z-index: 100;

  @media (max-width: ${Breakpoints.mobile}px) {
    top: 75% !important;
  }
`;

export const SocialLinkWrapper = styled(motion.div)`
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.border};
  margin-top: 2rem;

  @media only screen and (min-width: 650px) {
    width: 5rem;
    position: absolute;
    ${revFloat}: 1rem;
    flex-direction: column;
  }

  div {
    display: flex;
  }

  svg {
    cursor: pointer;
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const Blob = styled(motion.div)`
  background-color: ${({ theme }) => theme.border};
  width: 9rem;
  height: 9rem;
  padding-top: 0.5rem;
  border-top-left-radius: 40% 60%;
  border-top-right-radius: 40% 60%;
  border-bottom-right-radius: 40% 60%;
  border-bottom-left-radius: 60% 40%;
`;

export const AstronautWrapper = styled(motion.div)`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: ${direction === "rtl" ? "row-reverse" : "row"};
  justify-content: center;
  align-items: center;
`;

export const Image = styled(motion.img)`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
