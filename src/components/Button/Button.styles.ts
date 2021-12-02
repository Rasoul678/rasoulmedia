import styled from "styled-components";
interface IButtonProps {
  size: "small" | "medium" | "large";
}

export const Button = styled.div<IButtonProps>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.buttons.primary.textColor};
  background: ${({ theme }) => theme.buttons.primary.backgroundColor};
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
