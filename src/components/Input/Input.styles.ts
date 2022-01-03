import styled, { css } from "styled-components";

const { float } = window;

const commonCss = css`
  line-height: 1rem;
  font-size: 0.85rem;
  top: -1rem;
  background: #fff;
  padding: 0.35rem 0.8rem;
  ${float}: 0;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  color: #ccc;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Indicator = styled.div`
  position: absolute;
  width: 0;
  height: 0.2rem;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  background-color: #50a989;
  transition: width 0.3s linear;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: none;
  box-sizing: border-box;
  outline: 0;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  color: #ccc;

  ::placeholder {
    color: transparent;
  }

  :focus {
    border-color: #50a989;
  }

  :not(:placeholder-shown) + label::before {
    ${commonCss};
    font-weight: bold;
    color: #ccc;
  }

  :not(:placeholder-shown) ~ div,
  :focus ~ div {
    width: 100%;
  }

  :invalid ~ div {
    background-color: #bd4b4b;
  }

  :focus + label::before {
    ${commonCss};
    font-weight: bold;
    color: #ccc;
  }

  :required:focus + label::after,
  :required:not(:placeholder-shown) + label::after {
    content: "*";
    position: absolute;
    top: -1.5rem;
    ${float}: 0.3rem;
    line-height: 2.7rem;
    font-size: 1rem;
    font-weight: bold;
    color: #bd4b4b;
    transition: all 0.3s ease;
  }
`;

export const Label = styled.label`
  ::before {
    text-transform: capitalize;
    content: attr(title);
    position: absolute;
    top: 0;
    ${float}: 0.8rem;
    width: fit-content;
    line-height: 2.7rem;
    font-size: 0.9rem;
    color: #ccc;
    transition: all 0.3s ease;
  }

  ::after {
    content: "";
    position: absolute;
    top: 0rem;
    ${float}: 0.3rem;
    line-height: 2.7rem;
    font-size: 0.9rem;
    color: #bd4b4b;
    transition: all 0.3s ease;
  }
`;

export const Error = styled.span`
  width: 100%;
  display: block;
  font-size: 0.8rem;
  text-align: start;
  font-weight: bold;
`;
