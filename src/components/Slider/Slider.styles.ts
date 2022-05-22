import styled from "styled-components";

export const SlidesContainer = styled.div`
  width: 100%;
  aspect-ratio: 1.6;
  scroll-snap-type: x mandatory;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
`;

export const Slider = styled.div`
  border-radius: 1rem;
  height: 100%;
  aspect-ratio: 1.5;
  padding: 0.7rem;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5rem;
  background: #316e67;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.6px);
  -webkit-backdrop-filter: blur(1.6px);
  border: 1px solid rgba(255, 255, 255, 0.26);
`;
