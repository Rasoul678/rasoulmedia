import { motion } from "framer-motion";
import Slide from "components/CustomReveal/Slide";
import HomeGallery from "components/HomeGallery";
import * as Styled from "./Home.styles";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
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
      </div>
    </>
  );
};

export default Home;
