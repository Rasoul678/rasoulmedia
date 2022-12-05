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
  background-color: #fff;
  border: 2px solid
    ${({ theme }) => (theme.name === "light" ? "#121212" : "#eee")};
  box-shadow: 3px 3px
    ${({ theme }) => (theme.name === "light" ? "#121212" : "#eee")};
  background: ${({ theme, variant }) =>
    variant === "regular" && theme.buttons.secondary.backgroundColor};
  color: ${({ theme, variant }) =>
    variant !== "regular" ? theme.border : theme.buttons.secondary.textColor};
  padding: 0.1em 1em 0.1em;
  border-radius: 0.35em;
  ${({ theme, variant }) =>
    variant === "outline" && `border: 1px solid ${theme.border}`};
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
  position: relative;
  font-weight: 500;
  ${({ size }) =>
    size === "small" &&
    "min-height: 2.1em; font-size: 0.75em; min-width: 4rem;"}
  ${({ size }) =>
    size === "medium" &&
    "min-height: 2.3em; font-size: 0.85em; min-width: 5rem;"}
  ${({ size }) =>
    size === "large" && "min-height: 2.4em; font-size: 1em; min-width: 6rem;"}
  transition: transform 70ms ease-in-out, box-shadow 70ms ease-in-out;

  :hover {
    box-shadow: 2px 2px ${({ theme }) => (theme.name === "light" ? "#121212" : "#eee")};
    transform: translate3D(2px, 2px, 0);
  }
`;

interface ButtonLottieProps {
  isShown?: boolean;
}

export const ButtonLottie = styled.div<ButtonLottieProps>`
  width: 3em;
  display: ${({ isShown }) => (isShown ? "flex" : "none")};
  flex-direction: column;
`;
