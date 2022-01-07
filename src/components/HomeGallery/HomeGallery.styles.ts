import styled from "styled-components";
import { Breakpoints } from "constants/Global";

export const HomeGalleryContainer = styled.div`
  height: 100vh;
  position: relative;

  .typing {
    font-size: 1.4rem;
  }

  .cursor {
    font-size: 2rem;
  }

  .Typewriter {
    z-index: 100;
    position: absolute;
    top: 17rem;
    text-align: center;

    @media (max-width: ${Breakpoints.mobile}px) {
      top: 40%;
    }
  }

  .gallery-canvas {
    position: absolute !important;
  }
`;

export const IntroductionContainer = styled.div`
  color: ${({ theme }) => theme.text};
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 1rem;

  .home-gallery-avatar {
    border-radius: 50%;
    z-index: 100;
    // border: 3px solid   ${({ theme }) => theme.border};
  }

  .scroll-down-btn {
    z-index: 100;
  }

  .content-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const UserNameWrapper = styled.h2`
  z-index: 100;
  position: absolute;
  top: 27%;
`;

export const ArrowDownWrapper = styled.div`
width: 20%;
position: absolute;
top: 87%;
cursor: pointer;
z-index: 100;

  @media (max-width: ${Breakpoints.mobile}px) {
    top: 75% !important;
  }
`;

export const SocialLinkWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.border};

  @media (max-width: ${Breakpoints.mobile}px) {
    top: 60%;
  }

  svg {
    cursor: pointer;
  }
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.border};
`;
