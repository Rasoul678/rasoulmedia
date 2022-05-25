import { lazy } from "react";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import * as Styled from "./Home.styles";

import MobileIcon from "components/Icons/MobileIcon";
import TabletIcon from "components/Icons/TabletIcon";
import LapTopIcon from "components/Icons/LapTopIcon";
import MainLayout from "layouts/Main";
import GithubRepos from "./items/github-repos";
// import { useMediaQuery } from "react-responsive";
import Box from "components/Box";
// import WorkExperience from "./timelines/WorkExperience";
import Educations from "./items/educations";
// import RAFLoader from "components/RAFLoader";

const DesktopGallery = lazy(() => import("components/HomeGallery/laptop"));

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  // const isMobile = useMediaQuery({ maxWidth: "550px" });
  return (
    <View>
      <MainLayout>
        <DesktopGallery />
        {/* {!isMobile && (
          <Box width="90%" margin="auto">
            <GithubRepos />
          </Box>
        )} */}
        <Box width="90%" margin="auto">
          <GithubRepos />
        </Box>
        <Box marginTop="2rem">
          <Educations />
        </Box>
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
