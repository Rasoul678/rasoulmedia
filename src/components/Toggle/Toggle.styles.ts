import styled, { css } from "styled-components";
import { ThemeType } from "../Global/Theme";

interface ToggleProps {
  isChecked: boolean;
  theme: ThemeType;
}

export const ToggleLabel = styled.label`
  display: inline-block;
`;

export const ToggleInput = styled.input`
  /* visually hidden but still accessible */
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

const getCheckedCss = (props: ToggleProps) => {
  return props.isChecked
    ? css`
        &::after {
          left: 55%;
        }
        &:active {
          box-shadow: none;
        }
        &:active::after {
          margin-left: -1em;
        }
      `
    : css`
        &::after {
          left: 10%;
        }
        &:active {
          box-shadow: none;
        }
        &:active::after {
          margin-right: -1em;
        }
      `;
};

export const ToggleButton = styled.span<ToggleProps>`
  box-sizing: initial;
  display: inline-block;
  outline: 0;
  width: 3rem;
  height: 0.8rem;
  min-height: 0.8rem;
  max-height: 0.8rem;
  position: relative;
  cursor: pointer;
  user-select: none;
  border-radius: 1.2rem;
  padding: 0.4rem 0rem;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.text};
  transition: all 0.4s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    position: relative;
    display: block;
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 4em;
    background-color: ${({ theme }: { theme: ThemeType }) => theme.body};
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      padding 0.3s ease, margin 0.3s ease;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
  }

  &:active::after {
    padding-right: 1em;
  }
  ${getCheckedCss}
`;
