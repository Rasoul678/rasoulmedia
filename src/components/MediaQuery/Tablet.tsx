import { ReactNode } from "react";
import useResponsive from "hooks/useResponsive";

interface OnTabletProps {
  children?: ReactNode;
}

const OnTablet: React.FC<OnTabletProps> = ({ children }) => {
  const { isMobile, isTablet } = useResponsive();

  return !isMobile && isTablet ? <>{children}</> : null;
};

export default OnTablet;
