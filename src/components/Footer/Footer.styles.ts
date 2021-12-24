import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AlgaeWrapper = styled.div`
  display: flex;
  position: relative;
  bottom: -5.5rem;

  div:nth-child(1) {
    width: 7rem;
  }

  div:nth-child(2) {
    width: 6rem;
    transform: rotateY(180deg);
  }

  div:nth-child(3) {
    width: 5rem;
  }

  div:nth-child(4) {
    width: 9rem;
  }
`;
