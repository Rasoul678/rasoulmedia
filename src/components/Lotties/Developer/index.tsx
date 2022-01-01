import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/680-it-developer-outline-edited (dark).json";
import * as Styled from "./Developer.styles";

interface DeveloperLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string
}

const DeveloperLottie: React.FC<DeveloperLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: props.name || 'developer',
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default DeveloperLottie;
