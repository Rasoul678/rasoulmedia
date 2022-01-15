import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;

  .select__menu {
    background: ${({ theme }) => theme.background};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.text};
  }

  .select__control {
    border: none;
    background: transparent;
    box-shadow: none;
  }

  .select__single-value {
    color: ${({ theme }) => theme.border};
    text-transform: capitalize;
  }

  .select__option {
    color: ${({ theme }) => theme.text};
    text-transform: capitalize;
  }

  .select__indicators {
    display: none;
  }
`;
