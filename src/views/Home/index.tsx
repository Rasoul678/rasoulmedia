import { lazy } from "react";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Home.styles";

import MobileIcon from "components/Icons/MobileIcon";
import TabletIcon from "components/Icons/TabletIcon";
import LapTopIcon from "components/Icons/LapTopIcon";
import MainLayout from "layouts/Main";

const DesktopGallery = lazy(() => import("components/HomeGallery/laptop"));

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <View>
      <MainLayout>
      <DesktopGallery />
        <div className="bio">
          {/* <BiographyEducation />
          <WorkExperience /> */}
        </div>
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
        <div>
          <h1>Hello</h1>
        </div>
        <Styled.DevicesWrapper>
          <MobileIcon size={30} />
          <TabletIcon size={30} />
          <LapTopIcon size={35} />
        </Styled.DevicesWrapper>
        {/* <Footer /> */}
      </MainLayout>
    </View>
  );
};

export default Home;
