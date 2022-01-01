import { lazy, useState, Suspense } from "react";
import { useTheme } from "styled-components";
import HomeGallery from "components/HomeGallery";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import BiographyEducation from "./timelines/Biography_Education";
// import WorkExperience from "./timelines/WorkExperience";
import Button from "components/Button";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const theme = useTheme();

  const [lottie, setLottie] = useState("Certification");

  const Lottie = lazy(() => import(`../../components/Lotties/${lottie}`));

  return (
    <View>
      <HomeGallery />
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
          style={{margin: "1rem  auto"}}
        >
          change lottie
        </Button>
        <Suspense fallback={<div>Loading ...</div>}>
          <div style={{ height: "7rem" }}>
            <Lottie name='bottom'/>
          </div>
        </Suspense>
      </div>
      <Footer color={theme.colors[2]} />
    </View>
  );
};

export default Home;
