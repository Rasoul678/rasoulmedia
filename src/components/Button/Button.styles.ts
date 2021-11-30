import styled, { css } from "styled-components";
import { ThemeType } from "../Global/Theme";

interface ButtonProps {
  size: "small" | "medium" | "large";
  theme: ThemeType;
}

const smallSizeCss = css`
  height: 1rem;
  font-size: 0.7em;
`;

const mediumSizeCss = css`
  height: 1.2rem;
  font-size: 0.9em;
`;

const largeSizeCss = css`
  height: 1.4rem;
  font-size: 1.1em;
`;

export const Button = styled.div<ButtonProps>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 0.5em;
  border-radius: 0.25rem;
  cursor: pointer;
  user-select: none;
  ${({ size }) => size === "small" && smallSizeCss}
  ${({ size }) => size === "medium" && mediumSizeCss}
  ${({ size }) => size === "large" && largeSizeCss}

  &:hover {
  }
`;
