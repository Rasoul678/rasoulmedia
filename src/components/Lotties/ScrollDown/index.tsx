import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./ScrollDown.styles";
import scrollDownJson from "assets/animations/34342-arrow-down-icon-dark.json";

interface ScrollDownLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const ScrollDownLottie: React.FC<ScrollDownLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: scrollDownJson,
    name: props.name || "scroll-down",
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default ScrollDownLottie;
