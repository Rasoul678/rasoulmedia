import styled from "styled-components";

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
  transition: bottom 0.3s ease-in-out;
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
  box-shadow: inset 0px 7px 3px -3px ${({ theme }) => theme.border};
  width: 100vw;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  ${({ isOpen }) =>
    isOpen ? "height: calc(70vh )" : "height: 0rem; border-color: transparent"};
  position: absolute;
  bottom: -1rem;
  transition: all 0.3s ease-in-out;
  z-index: -1;
  background-color: ${({ theme }) => theme.background};

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: transparent;
  }
`;
