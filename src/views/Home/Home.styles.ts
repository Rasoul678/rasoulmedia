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
