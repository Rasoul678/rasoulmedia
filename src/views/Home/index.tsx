import { lazy } from "react";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Home.styles";
import BiographyEducation from "./timelines/Biography_Education";
import WorkExperience from "./timelines/WorkExperience";
import OnMobile from "components/MediaQuery/Mobile";
import OnTablet from "components/MediaQuery/Tablet";
import OnDesktop from "components/MediaQuery/Desktop";
import OnBigScreen from "components/MediaQuery/BigScreen";
import MobileIcon from "components/Icons/MobileIcon";
import TabletIcon from "components/Icons/TabletIcon";
import LapTopIcon from "components/Icons/LapTopIcon";
import MainLayout from "layouts/Main";

const MobileGallery = lazy(() => import("components/HomeGallery/mobile"));
const TabletGallery = lazy(() => import("components/HomeGallery/tablet"));
const DesktopGallery = lazy(() => import("components/HomeGallery/laptop"));

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <View>
      <OnMobile>
        <MobileGallery />
      </OnMobile>
      <OnTablet>
        <TabletGallery />
      </OnTablet>
      <OnDesktop>
        <DesktopGallery />
      </OnDesktop>
      <OnBigScreen>
        <DesktopGallery />
      </OnBigScreen>

      <MainLayout>
        <div>
          <BiographyEducation />
          <WorkExperience />
        </div>
        <Styled.DevicesWrapper>
          <MobileIcon size={30} />
          <TabletIcon size={30} />
          <LapTopIcon size={35} />
        </Styled.DevicesWrapper>
        <Footer />
      </MainLayout>
    </View>
  );
};

export default Home;
