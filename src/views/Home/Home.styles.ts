import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeTitle = styled(motion.h1)`
  color: ${({ theme }) => theme.border};
`;

export const EducationTimelineWrapper = styled.div`
  padding: 1rem;
`;

export const TimelineTitle = styled.h2`
  padding: 2rem 0 ;
`;
