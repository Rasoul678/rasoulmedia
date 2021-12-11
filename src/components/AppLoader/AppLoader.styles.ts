import styled, { keyframes } from "styled-components";

const typing = keyframes`
    from {width: 0ch;}
`;

export const AppLoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.5rem;
  font-family: Ubuntu, "Roboto", sans-serif;
`;

export const AppLoaderTextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AppLoaderDots = styled.span`
  display: inline-block;
  width: 4ch;
  font-family: monospace;
  overflow: hidden;

  animation: ${typing} 1.5s steps(4, end) infinite;
`;
