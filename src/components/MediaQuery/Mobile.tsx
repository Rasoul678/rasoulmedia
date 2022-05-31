import { ReactNode } from "react";
import useResponsive from "hooks/useResponsive";

interface OnMobileProps {
  children?: ReactNode;
}

const OnMobile: React.FC<OnMobileProps> = ({ children }) => {
  const { isMobile } = useResponsive();

  return isMobile ? <>{children}</> : null;
};

export default OnMobile;
