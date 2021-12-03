import styled from "styled-components";

export const HomeGalleryContainer = styled.div`
  height: 100vh;
  position: relative;

  .typing {
    font-size: 1.7rem;
  }

  .cursor {
    font-size: 2rem;
  }

  .Typewriter {
    z-index: 100;
    position: absolute;
    top: 20rem;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  .home-gallery-avatar {
    border-radius: 50%;
    margin-top: 2rem;
    z-index: 100;
    border: 4px solid ${({ theme }) => theme.border};
  }

  .scroll-down-btn {
    z-index: 100;
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.border};
`;

export const UserNameWrapper = styled.h1`
  z-index: 100;
  position: absolute;
  top: 14rem;
`;

export const ArrowDownWrapper = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 1rem;
  cursor: pointer;
`;

export const SocialLinkWrapper = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.border};

  svg {
    cursor: pointer;
  }
`;
