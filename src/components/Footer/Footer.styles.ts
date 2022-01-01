import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SeaCreaturesWrapper = styled.div`
  display: flex;
  position: relative;
  bottom: -5.5rem;

  div:nth-child(1) {
    width: 7rem;
    position: relative;
    top: 2rem;
    transform: rotateY(180deg);

    @media only screen and (min-width: 450px) {
      top: 2.2rem;
    }
  }

  div:nth-child(2) {
    width: 6rem;
    position: relative;
    top: 1.7rem;
    transform: rotateY(180deg);

    @media only screen and (min-width: 450px) {
      top: 1.85rem;
    }
  }

  div:nth-child(3) {
    width: 5rem;
    position: relative;
    top: 2.2rem;

    @media only screen and (min-width: 450px) {
      top: 2.9rem;
    }
  }

  div:nth-child(4) {
    width: 9rem;
    position: relative;

    @media only screen and (min-width: 450px) {
      top: 0.5rem;
    }
  }
`;
