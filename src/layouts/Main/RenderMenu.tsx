import { lazy } from "react";
import OnMobile from "components/MediaQuery/Mobile";
import OnTablet from "components/MediaQuery/Tablet";
import OnDesktop from "components/MediaQuery/Desktop";
import OnBigScreen from "components/MediaQuery/BigScreen";

const MobileMenu = lazy(
  () => import(/*webpackChunkName: "Mobile_Menu"*/ "layouts/MobileMenu")
);

const TabletMenu = lazy(
  () => import(/*webpackChunkName: "Tablet_Menu"*/ "layouts/TabletMenu")
);

const DesktopMenu = lazy(
  () => import(/*webpackChunkName: "Desktop_Menu"*/ "layouts/DesktopMenu")
);

const RenderMenu: React.FC = () => {
  return (
    <>
      <OnMobile>
        <MobileMenu />
      </OnMobile>
      <OnTablet>
        <TabletMenu />
      </OnTablet>
      <OnDesktop>
        <DesktopMenu />
      </OnDesktop>
      <OnBigScreen>
        <DesktopMenu />
      </OnBigScreen>
    </>
  );
};

export default RenderMenu;
