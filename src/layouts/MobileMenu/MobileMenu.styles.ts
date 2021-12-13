import styled, { keyframes } from "styled-components";

const bouncing = keyframes`
  0%{
    bottom: 0;
  }
  50%{
  bottom: 0.7rem;

  }
  100%{
    bottom: 0.3rem;
  }
`;

interface MobileMenuProps {
  isVisible: boolean;
  isOpen?: boolean;
}

export const MobileMenuContainer = styled.div<Partial<MobileMenuProps>>`
  position: fixed;
  left: 0;
  bottom: -0.1rem;
  width: 100%;
  height: 3.5rem;
  ${({ isVisible }) => !isVisible && "bottom: -3.5rem;"}
  background-color: ${({ theme }) => theme.background};
  border-top: 3px solid ${({ theme }) => theme.border};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  transition: bottom 0.2s linear;
  z-index: 200;
`;

export const MenuItem = styled.div<Partial<MobileMenuProps>>`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.2rem;

  svg {
    color: ${({ theme }) => theme.text};
  }

  :active svg {
    color: ${({ theme }) => theme.border};
  }

  :nth-child(3) svg {
    transition: transform 0.3s ease-in-out;
    ${({ isOpen }) => isOpen && "transform: rotate(180deg);"})
    color: ${({ isOpen, theme }) => isOpen && theme.border};
    ${({ isOpen, theme }) => isOpen && `color: ${theme.border};`})
  }
`;

export const ExpandedMenuContainer = styled.div<Partial<MobileMenuProps>>`
  -webkit-box-shadow: inset 0px 7px 3px -3px ${({ theme }) => theme.border};
  -moz-box-shadow: inset 0px 7px 3px -3px ${({ theme }) => theme.border};
  box-shadow: inset 0px 5px 3px -3px ${({ theme }) => theme.border};
  width: 100vw;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  ${({ isOpen }) =>
    isOpen ? "height: calc(60vh)" : "height: 0rem; border-color: transparent"};
  position: absolute;
  bottom: -2rem;
  transition: all 0.3s ease-in-out;
  z-index: -1;
  background-color: ${({ theme }) => theme.background};
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: transparent;
  }
`;

export const MenuCellsContainer = styled.div`
  width: 100%;
  max-height: calc(100% - 6.7rem);
  overflow-y: scroll;
  padding: 1.2rem 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 3fr));
  gap: 2rem;
`;

export const MenuSlidesContainer = styled.div`
  width: 100%;
  height: calc(100% - 15rem);
  scroll-snap-type: x mandatory;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;
`;

export const MenuSlider = styled.div`
  background: ${({ theme }) => theme.colors[1]};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.card.backgroundColor};
  border-radius: 1rem;
  height: 100%;
  aspect-ratio: 1.5;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;

export const MenuCellWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.card.backgroundColor};

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(20px);
  }

  .dark-mode {
    transform: rotateZ(45deg) !important;
  }
`;

export const LangOptionsContainer = styled.div`
  color: ${({ theme }) => theme.text};
  width: 60vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 0.5rem;
`;

export const LangOptionWrapper = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  padding: 0rem;
  border-radius: 1.2rem;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.card.backgroundColor};
`;

export const LangCellWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;

interface FlagWrapperProps {
  isSelected: boolean;
}

export const FlagWrapper = styled.div<FlagWrapperProps>`
  filter: brightness(${({ isSelected }) => (isSelected ? "100%" : "40%")});
  text-align: center;
  padding-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 500;
`;

interface PaletteCircleProps {
  isSelected: boolean;
}

export const PaletteCircle = styled.div<PaletteCircleProps>`
color: ${({ color }) => color}};
width: 4rem;
height: 4rem;
border-radius: 50%;
margin: 0.6rem 0.5rem;
display: flex;
justify-content: center;
align-items: center;
filter: brightness(${({ isSelected }) => (isSelected ? "100%" : "40%")});

::before{
  content: "";
  width: 1rem;
  height: 1rem;
  position: absolute;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  bottom: 0rem;
  left: 0rem;
  display: ${({ isSelected }) => (isSelected ? "revert" : "none")};
  animation: ${bouncing} 0.5s ease-in-out infinite;
}
`;
