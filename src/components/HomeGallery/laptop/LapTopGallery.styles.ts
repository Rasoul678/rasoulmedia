import styled from "styled-components";
import { Breakpoints } from "constants/Global";
import { motion } from "framer-motion";

const { revFloat, direction } = window;

export const HomeGalleryContainer = styled.div`
  height: 100vh;
  position: relative;

  @media only screen and (min-width: 1030px) {
    height: calc(100vh - 4rem);
  }

  ${({ theme }) =>
    theme.name === "dark"
      ? `background: rgb(25,25,25);
background: -moz-linear-gradient(-2deg, rgba(25,25,25,1) 12%, rgba(15,15,29,1) 30%, rgba(19,19,19,1) 77%, rgba(25,25,25,1) 100%);
background: -webkit-linear-gradient(-2deg, rgba(25,25,25,1) 12%, rgba(15,15,29,1) 30%, rgba(19,19,19,1) 77%, rgba(25,25,25,1) 100%);
background: linear-gradient(-2deg, rgba(25,25,25,1) 12%, rgba(15,15,29,1) 30%, rgba(19,19,19,1) 77%, rgba(25,25,25,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#191919",endColorstr="#191919",GradientType=1);`
      : `background: rgb(255,255,255);`}

  .typing {
    font-size: 1rem;

    @media only screen and (min-width: 450px) {
      font-size: 1.8rem;
    }

    @media only screen and (min-width: 650px) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 1000px) {
      font-size: 2.5rem;
    }
  }

  .cursor {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.border};

    @media only screen and (min-width: 1000px) {
      font-size: 3rem;
    }
  }

  .Typewriter {
    z-index: 100;
    text-align: center;

    @media (max-width: ${Breakpoints.mobile}px) {
      top: 40%;
    }
  }
`;

export const IntroductionContainer = styled(motion.div)`
  color: ${({ theme }) => theme.text};
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 1030px) {
    flex-direction: row-reverse;
    padding: 0rem 7rem;

    img {
      width: 15rem;
    }

    > div:first-child {
      min-width: 11rem;
      min-height: 11rem;
    }
  }
`;

export const IntroductionInfoWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6rem;

  @media only screen and (max-width: 1030px) {
    align-items: center;
    gap: 2rem;
  }

  @media only screen and (max-width: 550px) {
    margin-top: 10%;
    gap: 3rem;
  }

  @media only screen and (min-width: 1030px) {
    margin-top: 20%;
    gap: 6rem;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const UserNameWrapper = styled(motion.h2)`
  z-index: 100;
  font-size: 1.3rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: 450px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 650px) {
    font-size: 2.8rem;
  }
`;

export const UserSkills = styled(motion.h2)`
  color: ${({ theme }) => theme.border};
  @media only screen and (max-width: 650px) {
    font-size: 0.8rem;
  }
`;

export const Skill = styled.span`
  color: ${({ theme }) => theme.text};
  transition: color 0.7s linear;
`;

export const TypeWriterWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  transition: color 0.7s linear;
`;

export const ArrowDownWrapper = styled(motion.div)`
  width: 4rem;
  position: absolute;
  bottom: 0;
  left: calc(50% - 2rem);
  cursor: pointer;
  z-index: 100;

  @media (max-width: ${Breakpoints.mobile}px) {
    top: 70% !important;
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
  transition: color 0.7s linear;
`;

export const Blob = styled(motion.div)`
  background-color: ${({ theme }) => theme.border};
  width: 10rem;
  height: 10rem;
  padding-top: 0.5rem;
  border-radius: 50%;
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
  border-radius: 50%;
  max-width: 12rem;

  @media only screen and (max-width: 1030px) {
    width: 9rem;
  }
`;
