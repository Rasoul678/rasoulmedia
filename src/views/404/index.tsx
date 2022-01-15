import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import NotFoundJson from "assets/animations/73059-search-not-found.json";
import useLottie from "hooks/useLottie";
import { View } from "components/Global/GlobalStyles";
import Footer from "components/Footer";
import Button from "components/Button";

const NotFound: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useLottie({
    container: container as any,
    animationData: NotFoundJson,
    name: "not found",
  });

  return (
    <View>
      <Button
        size="medium"
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          zIndex: "10",
        }}
        onClick={() => navigate(-1)}
      >
        go back
      </Button>
      <div
        style={{
          width: "20rem",
          margin: "auto",
          height: "calc(100vh - 16rem)",
        }}
        ref={container}
      />
      <Footer />
    </View>
  );
};

export default NotFound;
