import { ReactElement } from "react";
import useResponsive from "../../hooks/useResponsive";

const OnDesktop: React.FC = ({ children }) => {
  const { isDesktopOrLaptop, isBigScreenDevice } = useResponsive();

  return isDesktopOrLaptop && !isBigScreenDevice
    ? (children as ReactElement)
    : null;
};

export default OnDesktop;
