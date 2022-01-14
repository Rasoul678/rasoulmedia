import { Breakpoints } from "constants/Global";
import styled from "styled-components";

const { float, revFloat } = window;

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

export const TimelineTitle = styled.div`
  position: relative;
  padding: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  justify-content: space-between;

  // .next-button {
  //   position: absolute;
  //   ${revFloat}: 0;
  //   top: 1rem;
  // }
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
  position: absolute;
  bottom: 11rem;
  ${float}: calc(50% - 4rem);
`;

export const FooterText = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  ${float}: calc(50% - 5rem);
  color: #000;
  font-weight: 500;

  @media only screen and (max-width: 550px) {
    bottom: 0.5rem;
  }
`;

export const ScrollPlaceholder = styled.div`
  position: absolute;
  width: 90%;
  top: 0;

  @media only screen and (min-width: ${Breakpoints.tablet}px) {
    top: -3rem;
  }
`;
