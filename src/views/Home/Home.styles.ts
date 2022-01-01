import styled from "styled-components";
import { motion } from "framer-motion";

const { float } = window;

export const HomeTitle = styled(motion.h1)`
  color: ${({ theme }) => theme.border};
`;

export const EducationTimelineWrapper = styled.div`
  padding: 1rem;
  width: calc(100% - 2rem);
  margin: 0 auto;

  .timeline-lottie svg {
    margin-${float}: -50% !important;
    margin-top: -50% !important;
  }

  .timeline-fetus-lottie svg {
    margin-${float}: -63% !important;
    margin-top: -64% !important;
  }

  .timeline-grad-lottie svg{
    margin-${float}: -73% !important;
    margin-top: -73% !important;
  }

  .timeline-grad2-lottie svg{
    margin-${float}: -64% !important;
    margin-top: -70% !important;
  }

  .fetus{
    width: 140%;
    height: 140%;
  }

  .bachelor{
    width: 200%;
    height: 200%;
  }

  .master{
    width: 140%;
    height: 140%;
  }

`;

export const TimelineTitle = styled.h2`
  padding: 1rem 0;
  border-bottom: 5px solid ${({ theme }) => theme.border};
`;

export const LinkTo = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.border};
  border-bottom: 1px solid #fff;
`;

export const BirthDescriptionWrapper = styled.div`
  text-align: justify;
  text-justify: inter-character;
  padding: 1rem 0;
`;
