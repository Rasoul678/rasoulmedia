import { lazy } from "react";
import { useTheme } from "styled-components";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Home.styles";
import BiographyEducation from "./timelines/Biography_Education";
import WorkExperience from "./timelines/WorkExperience";
import OnMobile from "components/MediaQuery/Mobile";
import OnTablet from "components/MediaQuery/Tablet";
import MobileIcon from "components/Icons/MobileIcon";
import TabletIcon from "components/Icons/TabletIcon";
import LapTopIcon from "components/Icons/LapTopIcon";

const MobileGallery = lazy(() => import("components/HomeGallery/mobile"));
const TabletGallery = lazy(() => import("components/HomeGallery/tablet"));

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const theme = useTheme();

  return (
    <View>
      <OnMobile>
        <MobileGallery />
      </OnMobile>
      <OnTablet>
        <TabletGallery />
      </OnTablet>
      <div>
        <div>
          <BiographyEducation />
          <WorkExperience />
        </div>
      </div>
      <Styled.DevicesWrapper>
        <MobileIcon size={30} />
        <TabletIcon size={30} />
        <LapTopIcon size={35} />
      </Styled.DevicesWrapper>
      <Styled.FooterText>
        Made by love | {new Date().getFullYear()}
      </Styled.FooterText>
      <Footer color={theme.colors[2]} />
    </View>
  );
};

export default Home;
