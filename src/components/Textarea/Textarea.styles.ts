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

export const TextareaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Textarea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  min-height: 7rem;
  outline: 0;
  padding: 1rem 0.8rem;
  font-size: 1rem;
  font-family: IRANSans;
  border-radius: 0.3rem;
  border: none;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  color: #ccc;

  ::placeholder {
    color: transparent;
  }

  :focus {
    border-color: #50a989;
  }

  :not(:placeholder-shown) ~ div,
  :focus ~ div {
    width: 100%;
  }

  :invalid ~ div {
    background-color: #bd4b4b;
  }

  :not(:placeholder-shown) + label::before {
    ${commonCss};
    font-weight: bold;
    color: #ccc;
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
    line-height: 2.7rem;
    font-size: 0.9rem;
    width: fit-content;
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

export const Indicator = styled.div`
  position: absolute;
  bottom: 0.65rem;
  width: 0;
  height: 0.2rem;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  background-color: #50a989;
  transition: width 0.3s linear;
`;

export const Error = styled.span`
  position: absolute;
  width: 100%;
  bottom: -0.7rem;
  display: block;
  font-size: 0.8rem;
  text-align: start;
  font-weight: bold;
  padding: 0 1rem;
  text-transform: capitalize;
`;
