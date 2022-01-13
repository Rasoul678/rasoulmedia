import { lazy, useState, Suspense } from "react";
import { useTheme } from "styled-components";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import BiographyEducation from "./timelines/Biography_Education";
// import WorkExperience from "./timelines/WorkExperience";
import Button from "components/Button";
import OnMobile from "components/MediaQuery/Mobile";
import OnTablet from "components/MediaQuery/Tablet";

const MobileGallery = lazy(() => import("components/HomeGallery/mobile"));
const TabletGallery = lazy(() => import("components/HomeGallery/tablet"));

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const theme = useTheme();

  const [lottie, setLottie] = useState("Certification");

  const Lottie = lazy(() => import(`components/Lotties/${lottie}`));

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
          {/* <WorkExperience /> */}
        </div>
        <Button
          size="medium"
          onClick={() => {
            if (lottie === "Developer") {
              setLottie("Certification");
            } else {
              setLottie("Developer");
            }
          }}
          style={{ margin: "1rem  auto" }}
        >
          change lottie
        </Button>
        <Suspense fallback={<div>Loading ...</div>}>
          <div style={{ height: "7rem" }}>
            <Lottie name="bottom" />
          </div>
        </Suspense>
      </div>
      <Footer color={theme.colors[2]} />
    </View>
  );
};

export default Home;
