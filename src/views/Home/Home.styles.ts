import { Breakpoints } from "constants/Global";
import styled from "styled-components";

const { float } = window;

export const TimelineWrapper = styled.div`
  padding: 1rem;
  width: calc(100% - 0rem);
  margin: 0 auto;
  position: relative;

  .timeline-lottie svg {
    margin-${float}: -50% !important;
    margin-top: -50% !important;
  }

  .timeline-certification-lottie svg {
    margin-${float}: -50% !important;
    margin-top: -45% !important;
  }

  .timeline-fetus-lottie svg {
    margin-${float}: -64% !important;
    margin-top: -65% !important;
  }

  .timeline-grad-lottie svg{
    margin-${float}: -75% !important;
    margin-top: -75% !important;
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

export const TimelineTitle = styled.div`
  position: relative;
  padding: 1rem 0;
  font-size: 1.2rem;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;

  .next-button {
    text-transform: lowercase;
  }
`;

export const LinkTo = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.border};
  border-bottom: 1px solid #fff;
`;

export const DescriptionWrapper = styled.div`
  text-align: justify;
  text-justify: inter-character;
  padding: 1rem 0;
`;

export const DevicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;

export const CardWrapper = styled.div`
  display: grid;
  gap: 1rem;
  margin: 3rem;
  margin-bottom: 0;

  @media only screen and (max-width: 550px) {
    margin: 1rem;
  }

  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
`;

export const ScrollPlaceholder = styled.div`
  position: absolute;
  width: 90%;
  top: 0;

  @media only screen and (min-width: ${Breakpoints.tablet}px) {
    top: -3rem;
  }
`;

export const StackContainer = styled.div`
  padding: 1rem;
`;

export const StackWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
