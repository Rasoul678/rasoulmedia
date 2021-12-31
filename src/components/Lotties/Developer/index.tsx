import { useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/680-it-developer-outline-edited (dark).json";
import * as Styled from "./Developer.styles";

interface DeveloperLottieProps {}

const DeveloperLottie: React.FC<DeveloperLottieProps> = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: "certification",
  });

  return (
    <Styled.LottieWrapper>
      <Styled.Lottie ref={container} />
    </Styled.LottieWrapper>
  );
};

export default DeveloperLottie;
