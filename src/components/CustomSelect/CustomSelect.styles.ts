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

// export const Select = styled(ReactSelect)`
//   .select__control {
//     border: 0.04rem solid var(--rv-color-distant);
//     border-radius: 0.3rem;
//     height: 3rem;
//   }

//   .select__single-value {
//     color: var(--rv-gray-color);
//   }

//   .select__control:hover {
//     border-color: var(--rv-color-distant);
//   }

//   .select__control--is-focused {
//     border: 0.08rem solid var(--rv-color) !important;
//     outline: none;
//     box-shadow: none;
//   }

//   .select__indicator-separator {
//     display: none;
//   }

//   .select__menu {
//     box-shadow: 1px 3px 5px #2b7be44d;
//     border-radius: 0.5rem;
//     overflow: hidden;
//   }

//   .select__option {
//     color: var(--rv-gray-color);
//   }

//   .select__option:hover {
//     cursor: pointer;
//     background-color: transparent;
//   }

//   .select__option--is-selected {
//     background-color: transparent;
//     color: var(--rv-color-verywarm);
//     font-weight: 500;
//   }
// `;
