import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 60%;
  margin: 1rem auto 0rem;

  @media (max-width: 500px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 75%;
  }
`;

export const FormTitle = styled.h2`
  margin-top: 2rem;
`;

export const SocialWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
