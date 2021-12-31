import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeTitle = styled(motion.h1)`
  color: ${({ theme }) => theme.border};
`;

export const EducationTimelineWrapper = styled.div`
  padding: 1rem;
  width: calc(100% - 2rem);
  margin: 0 auto;
`;

export const TimelineTitle = styled.h2`
  padding: 2rem 0;
`;
