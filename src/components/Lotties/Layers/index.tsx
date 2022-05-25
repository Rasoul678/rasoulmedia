import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Layers.styles";
import layersJson from "assets/animations/lordicons/red/12-layes-outline-edited (dark).json";

interface LayersLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const LayersLottie: React.FC<LayersLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: layersJson,
    name: props.name || "apps",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default LayersLottie;
