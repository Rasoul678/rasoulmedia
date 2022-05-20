import { ReactElement } from "react";
import useResponsive from "hooks/useResponsive";

const OnMobile: React.FC = ({ children }) => {
  const { isMobile } = useResponsive();

  return isMobile ? (children as ReactElement) : null;
};

export default OnMobile;
