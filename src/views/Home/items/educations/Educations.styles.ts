import styled from "styled-components";
import { motion } from "framer-motion";

const {revFloat} = window;

export const EducationsContainer = styled(motion.div)`
  min-height: 25rem;
  margin: 3rem;
  margin-bottom: 0;

  @media only screen and (max-width: 550px) {
    margin: 1rem 1.5rem;
  }

  .bs-lottie-icon {
    width: 100%;
  }
`;

export const LottieWrapper = styled.div`
  position: absolute;
  ${revFloat}: -8rem;
  top: -10rem;
  width: 30rem;
  opacity: 0.25;
`;

export const EducationsWrapper = styled(motion.div)`
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  padding: 1.5rem;
  background-color: #419389;
  position: relative;
  color: #111;

  @media only screen and (max-width: 550px) {
    padding: 1.5rem 1rem;
  }
`;

export const EducationsItems = styled(motion.div)`
  width: 100%;
  height: 100%;
  text-align: start;
`;

export const Heading = styled(motion.h1)`
  font-size: 2.5rem;

  @media only screen and (max-width: 550px) {
    font-size: 1.6rem;
  }
`;

export const ItemsList = styled(motion.ul)`
  padding: 1rem 2.5rem;
  font-size: 1.35rem;

  @media only screen and (max-width: 550px) {
    padding: 1rem 1.5rem;
  }
`;

export const Item = styled(motion.li)`
  margin: 0.5rem 0;
`;

export const LinkTo = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border-bottom: 1px solid #fff;
`;