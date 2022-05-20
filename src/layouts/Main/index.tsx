import { lazy } from "react";
import OnDesktop from "components/MediaQuery/Desktop";
import OnBigScreen from "components/MediaQuery/BigScreen";

const DesktopMenu = lazy(
  () => import(/*webpackChunkName: "Desktop_Menu"*/ "layouts/DesktopMenu")
);

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section>
      <OnDesktop>
        <DesktopMenu />
      </OnDesktop>
      <OnBigScreen>
        <DesktopMenu />
      </OnBigScreen>
      {children}
    </section>
  );
};

export default MainLayout;
