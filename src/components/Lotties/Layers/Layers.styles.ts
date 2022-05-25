import styled from "styled-components";

export const Lottie = styled.div`
  height: 100%;
  width: 100%;

  svg path {
    stroke: ${({ theme }) => theme.text};
  }

  svg g g:nth-child(2) path {
    stroke: ${({ theme }) => theme.border};
  }
`;
