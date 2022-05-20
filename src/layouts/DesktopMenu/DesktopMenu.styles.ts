import { motion } from "framer-motion";
import styled from "styled-components";

export const DesktopNavbar = styled(motion.nav)`
  position: sticky;
  top: 0;
  padding: 1rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  z-index: 200;
  -webkit-box-shadow: 0px 1px 1px ${({ theme }) => theme.card.backgroundColor};
  -moz-box-shadow: 0px 1px 1px ${({ theme }) => theme.card.backgroundColor};
  box-shadow: 0px 1px 1px ${({ theme }) => theme.card.backgroundColor};
`;

export const MenuItemsWrapper = styled(motion.section)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const MenuItem = styled(motion.div)`
  margin: 0;
  padding: 0;
`;

export const MenuLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SettingWrapper = styled(motion.div)`
  display: flex;
  cursor: pointer;
  color: ${({ theme }) => theme.border};
`;
