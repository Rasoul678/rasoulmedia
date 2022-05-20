import { ReactElement } from "react";
import useResponsive from "hooks/useResponsive";

const OnBigScreen: React.FC = ({ children }) => {
  const { isBigScreenDevice } = useResponsive();

  return isBigScreenDevice ? (children as ReactElement) : null;
};

export default OnBigScreen;
