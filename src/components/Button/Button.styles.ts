import styled from "styled-components";
interface IButtonProps {
  size: "small" | "medium" | "large";
  fullWidth?: boolean;
  variant: "outline" | "ghost" | "regular";
}

export const Button = styled.div<IButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "fit-content")};
  min-width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, variant }) =>
    variant === "regular" && theme.buttons.secondary.backgroundColor};
  color: ${({ theme, variant }) =>
    variant !== "regular" ? theme.border : theme.buttons.secondary.textColor};
  padding: 0.4em 0.8em 0.2em;
  border-radius: 0.4rem;
  ${({ theme, variant }) =>
    variant === "outline" && `border: 1px solid ${theme.border}`};
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  position: relative;
  ${({ size }) =>
    size === "small" && "min-height: 2.1em; font-size: 0.9em; min-width: 4rem;"}
  ${({ size }) =>
    size === "medium" && "min-height: 2.3em; font-size: 1em; min-width: 5rem;"}
  ${({ size }) =>
    size === "large" && "min-height: 2.4em; font-size: 1.2em; min-width: 6rem;"}
`;

interface ButtonLottieProps {
  isShown?: boolean;
}

export const ButtonLottie = styled.div<ButtonLottieProps>`
  width: 3em;
  display: ${({ isShown }) => (isShown ? "flex" : "none")};
  flex-direction: column;
`;
