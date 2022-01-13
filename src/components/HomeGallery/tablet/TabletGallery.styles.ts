import styled from "styled-components";
import { Breakpoints } from "constants/Global";
import { motion } from "framer-motion";

const { revFloat } = window;

export const HomeGalleryContainer = styled.div`
  height: 100vh;
  position: relative;

  .typing {
    font-size: 1.4rem;
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

export const IntroductionContainer = styled.div`
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
    flex-direction: row-reverse;

    img {
      width: 12rem;
      margin-top: 1rem;
    }

    > div:first-child {
      min-width: 15rem;
      min-height: 15rem;
      margin-${revFloat}: 2.5rem; 
    }
  }
`;

export const IntroductionInfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media only screen and (max-width: 650px) {
    gap: 3rem;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const UserNameWrapper = styled(motion.h2)`
  z-index: 100;
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
  margin-top: 2rem;
  gap: 2rem;
  color: ${({ theme }) => theme.border};

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
