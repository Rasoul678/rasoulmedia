import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

interface GlobalStylesProps {
  theme: ThemeType;
}

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  *  {
    box-sizing: border-box;
    padding: 0;
    
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Ubuntu, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.2s linear;
    user-select: none;
    margin-bottom: 4rem;
  }
  `;
