import { useRef } from "react";
import Slide from "components/CustomReveal/Slide";
import HomeGallery from "components/HomeGallery";
import json from "assets/animations/lordicons/green/1845-rose-outline-edited (dark).json";
import useLottie from "hooks/useLottie";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const container = useRef<HTMLDivElement | null>(null);
  
  const lottie = useLottie({
    container: container as any,
    animationData: json,
    name: "roses",
  });

  return (
    <>
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
          {[1, 2, 3].map((i) => (
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
          style={{ width: "5rem" }}
          ref={container}
          onMouseEnter={() => lottie.play()}
          onMouseLeave={() => lottie.pause()}
        />
      </div>
    </>
  );
};

export default Home;
