import styled from "styled-components";

export const Lottie = styled.div`
  height: 100%;
  width: 100%;

  svg path {
    fill: ${({ theme, color }) => color || theme.border};
  }
`;
