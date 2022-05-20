import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isBigScreenDevice = useMediaQuery({ minWidth: 1824 });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1026 });
  const isTablet = useMediaQuery({ maxWidth: 1025 });
  const isMobile = useMediaQuery({ maxWidth: 550 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  return { isBigScreenDevice, isDesktopOrLaptop, isTablet, isMobile, isPortrait };
};

export default useResponsive;
