import {  ReactNode } from "react";
import useResponsive from "hooks/useResponsive";

interface OnBigScreenProps {
  children?: ReactNode;
}

const OnBigScreen: React.FC<OnBigScreenProps> = ({ children }) => {
  const { isBigScreenDevice } = useResponsive();

  return isBigScreenDevice ? <>{children}</> : null;
};

export default OnBigScreen;
