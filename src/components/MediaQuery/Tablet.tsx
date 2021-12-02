import { ReactElement } from "react";
import useResponsive from "../../hooks/useResponsive";

const OnTablet: React.FC = ({ children }) => {
  const { isMobile, isTablet } = useResponsive();

  return !isMobile && isTablet ? (children as ReactElement) : null;
};

export default OnTablet;
