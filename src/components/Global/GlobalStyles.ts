import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *  {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: IRANSans, Ubuntu, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.2s linear;
    user-select: none;
  }
  `;
