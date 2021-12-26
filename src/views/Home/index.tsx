import { useRef } from "react";
import { useTheme } from "styled-components";
import HomeGallery from "components/HomeGallery";
import json from "assets/animations/lordicons/green/680-it-developer-outline-edited (dark).json";
import useLottie from "hooks/useLottie";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";
import BiographyEducation from "./timelines/Biography_Education";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();

  const lottie = useLottie({
    container: container as any,
    animationData: json,
    name: "dev",
    loop: false,
  });

  return (
    <View>
      <HomeGallery />
      <div>
        <div>
          <BiographyEducation />
        </div>
        <div
          style={{ width: "10rem", margin: "0 auto" }}
          ref={container}
          onMouseEnter={() => lottie.play("dev")}
          onMouseLeave={() => lottie.stop("dev")}
        />
      </div>
      <Footer color={theme.colors[2]} />
    </View>
  );
};

export default Home;
