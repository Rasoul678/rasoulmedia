import { lazy } from "react";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Home.styles";

import MobileIcon from "components/Icons/MobileIcon";
import TabletIcon from "components/Icons/TabletIcon";
import LapTopIcon from "components/Icons/LapTopIcon";
import MainLayout from "layouts/Main";
// import BiographyEducation from "./timelines/Biography_Education";
// import WorkExperience from "./timelines/WorkExperience";
// import Box from "components/Box";
// import Slider from "components/Slider";

const DesktopGallery = lazy(() => import("components/HomeGallery/laptop"));

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <View>
      <MainLayout>
        <DesktopGallery />
        {/* <BiographyEducation />
        <WorkExperience /> */}
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
