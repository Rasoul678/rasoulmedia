import styled from "styled-components";
import { motion } from "framer-motion";

const { float, revFloat } = window;

interface TabletNavbarProps {
  isOpen: boolean;
}

export const TabletNavbar = styled(motion.nav)<TabletNavbarProps>`
  position: fixed;
  top: 0;
  ${float}: 0;
  bottom: 0;
  width: ${({ isOpen }) => (isOpen ? "15rem" : "0")};
  z-index: 100;
`;

export const TabletNavbarBg = styled(motion.div)`
  position: absolute;
  top: 0;
  ${float}: 0;
  bottom: 0;
  width: 15rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.card.backgroundColor};
`;

export const TabletNavbarButton = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  ${float}: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

export const TabletMenuItemsWrapper = styled(motion.ul)`
  margin: 0;
  padding-top: 1rem;
  padding-${float}: 2rem;
  padding-bottom: 1.5rem;
  padding-${revFloat}: 0;

  position: absolute;
  top: 4.5rem;
  width: 100%;
  height: calc(100% - 5rem);
`;

export const TabletMenuItem = styled(motion.li)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 0.8rem;
`;

export const TabletMenuLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  text-transform: capitalize;
`;

export const TabletMenuText = styled.span`
  padding: 0.5rem 0.5rem 0;
  font-size: 1.2rem;
`;

export const MenuCellsContainer = styled(motion.div)`
  width: 100%;
  position: absolute;
  bottom: 0rem;
  ${float}: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

export const MenuCellWrapper = styled(motion.div)`
  width: 70%;
  aspect-ratio: 1;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  cursor: pointer;
  color: ${({ theme }) => theme.border};

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(20px);
  }

  .dark-mode {
    transform: rotateZ(45deg) !important;
  }
`;

export const LangCellWrapper = styled.div`
  width: 83%;
  height: 83%;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;
