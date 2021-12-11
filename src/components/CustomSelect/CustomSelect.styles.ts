import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;

  .select__control {
    border: none;
    background: transparent;
    box-shadow: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    flex-direction: column;
  }

  .select__single-value {
    color: ${({ theme }) => theme.text}; };
  }

  .select__option{
    color: #333 !important;
  }

  .select__indicators {
    display: none;
  }
`;
