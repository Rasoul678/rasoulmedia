import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Home.styles";
import homeJson from "assets/animations/lordicons/red/63-home-outline-edited (dark).json";

interface HomeLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const HomeLottie: React.FC<HomeLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: homeJson,
    name: props.name || "home",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default HomeLottie;
