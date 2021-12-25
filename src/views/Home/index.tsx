import { useRef } from "react";
import { useTheme } from "styled-components";
import Slide from "components/CustomReveal/Slide";
import HomeGallery from "components/HomeGallery";
import json from "assets/animations/lordicons/green/478-computer-display-outline-edited (dark).json";
import useLottie from "hooks/useLottie";
import Footer from "components/Footer";
import { View } from "components/Global/GlobalStyles";

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
        <h1
          className="next"
          style={{
            textAlign: "center",
            height: "20vh",
          }}
        >
          Home
        </h1>
        <div>
          {[1, 2, 3, 4, 5].map((i) => (
            <Slide bottom key={i}>
              <h1
                style={{
                  textAlign: "center",
                  height: "25vh",
                  border: "1px solid #fff",
                  verticalAlign: "middle",
                  margin: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                Rasoul Media
              </h1>
            </Slide>
          ))}
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
