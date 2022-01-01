import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/1270-fetus-outline-edited (dark).json";
import * as Styled from "./Fetus.styles";

interface FetusLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const FetusLottie: React.FC<FetusLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: props.name || "fetus",
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default FetusLottie;
