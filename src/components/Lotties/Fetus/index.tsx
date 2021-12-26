import { useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/1270-fetus-outline-edited (dark).json";
import * as Styled from "./Fetus.styles";

interface FetusLottieProps {}

const FetusLottie: React.FC<FetusLottieProps> = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: "fetus",
  });

  return (
    <Styled.LottieWrapper>
      <Styled.Lottie ref={container} />
    </Styled.LottieWrapper>
  );
};

export default FetusLottie;
