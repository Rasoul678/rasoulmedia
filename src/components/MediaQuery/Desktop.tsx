import { ReactNode } from "react";
import useResponsive from "hooks/useResponsive";

interface OnDesktopProps {
  children?: ReactNode;
}

const OnDesktop: React.FC<OnDesktopProps> = ({ children }) => {
  const { isDesktopOrLaptop, isBigScreenDevice } = useResponsive();

  return isDesktopOrLaptop && !isBigScreenDevice ? <>{children}</> : null;
};

export default OnDesktop;
