import { useState } from "react";
import Slide from "../../components/CustomReveal/Slide";
import HomeGallery from "../../components/HomeGallery";
import Toggle from "../../components/Toggle";
import useActions from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  const { toggleTheme } = useActions();
  const [isChecked, setIsChecked] = useState(false);
  const { theme } = useTypedSelector((state) => state.global);

  const handleToggle = (value: boolean) => {
    toggleTheme(theme === "dark" ? "light" : "dark");
    setIsChecked(value);
  };

  return (
    <>
      <HomeGallery />
      <div>
        <Toggle value={isChecked} onToggle={handleToggle} />
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
            <Slide left key={i}>
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
