import styled from "styled-components";

export const ErrorFallbackContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #000;
`;

export const FallbackAnimationWrapper = styled.div`
  font-size: 1.5rem;
  color: #fff;
  font-family: Ubuntu, "Roboto", sans-serif;
  display: grid;
  justify-content: center;
  place-items: center;
  height: 100vh;
`;
