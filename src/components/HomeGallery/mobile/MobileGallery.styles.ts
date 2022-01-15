import styled from "styled-components";
import { Breakpoints } from "constants/Global";
import { motion } from "framer-motion";

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
    position: absolute;
    top: 40%;
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
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;

  .home-gallery-avatar {
    border-radius: 50%;
    z-index: 100;
    margin-top: 1rem;
    filter: brightness(1.2);
    // border: 3px solid   ${({ theme }) => theme.border};
  }

  .scroll-down-btn {
    z-index: 100;
  }

  .content-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const UserNameWrapper = styled(motion.h2)`
  z-index: 100;
  position: absolute;
  top: 30%;

  @media (max-width: ${Breakpoints.mobile}px) {
    top: 27% !important;
  }
`;

export const TypeWriterWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

export const ArrowDownWrapper = styled(motion.div)`
  width: 4rem;
  position: absolute;
  top: 87%;
  cursor: pointer;
  z-index: 100;

  @media (max-width: ${Breakpoints.mobile}px) {
    top: 75% !important;
  }
`;

export const SocialLinkWrapper = styled(motion.div)`
  z-index: 100;
  position: absolute;
  top: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.border};

  div {
    display: flex;
  }

  @media (max-width: ${Breakpoints.mobile}px) {
    top: 60%;
    gap: 1rem;
  }

  svg {
    cursor: pointer;
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const Blob = styled(motion.div)`
  position: absolute;
  top: 3%;
  background-color: ${({ theme }) => theme.border};
  width: 9rem;
  height: 9rem;
  border-top-left-radius: 40% 60%;
  border-top-right-radius: 40% 60%;
  border-bottom-right-radius: 40% 60%;
  border-bottom-left-radius: 60% 40%;
`;

export const AstronautWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled(motion.img)`
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: 90%;
`;
