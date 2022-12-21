import { motion } from "framer-motion";
import styled from "styled-components";

export const DesktopNavbar = styled(motion.nav)`
  position: sticky;
  top: 0;
  padding: 1rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
  background: ${({ theme }) =>
    theme.name === "dark"
      ? "rgba(23,23,23,0.36)"
      : "rgba(255, 255, 255, 0.17)"};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.name === "dark"
        ? "rgba(43, 41, 41, 0.41)"
        : "rgba(255, 255, 255, 0.41)"};
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
  // color: ${({ theme }) => theme.border};
`;
