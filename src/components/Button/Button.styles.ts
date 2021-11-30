import styled from "styled-components";
import { ThemeType } from "../Global/Theme";

interface ButtonProps {
  size: "small" | "medium" | "large";
  theme: ThemeType;
}

export const Button = styled.div<ButtonProps>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }: { theme: ThemeType }) =>
    theme.buttons.primary.textColor};
  background: ${({ theme }: { theme: ThemeType }) =>
    theme.buttons.primary.backgroundColor};
  padding: 0.5rem 0.8em;
  border-radius: 0.4rem;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  ${({ size }) => size === "small" && "font-size: 0.9em;"}
  ${({ size }) => size === "medium" && "font-size: 1em;"}
  ${({ size }) => size === "large" && "font-size: 1.2em;"}

  &:hover {
  }
`;
