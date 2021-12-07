import styled from "styled-components";

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 3.8rem;
  height: 2.2rem;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ theme }) => theme.text};
  }

  &:checked + span:before {
    -webkit-transform: translateX(1.7rem);
    -ms-transform: translateX(1.7rem);
    transform: translateX(1.7rem);
  }
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.text};
  -webkit-transition: 0.5s;
  transition: 0.5s;
  border-radius: 2rem;

  &::before {
    position: absolute;
    content: "";
    height: 1.7rem;
    width: 1.7rem;
    left: 0.2rem;
    bottom: 0.25rem;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.background};
  }
`;
