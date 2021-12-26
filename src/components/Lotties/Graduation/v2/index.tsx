import { useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/graduation2.json";
import * as Styled from "./Graduation.styles";

interface GraduationLottieProps {}

const GraduationLottie: React.FC<GraduationLottieProps> = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: "graduation-v2",
    loop: false,
  });

  return (
    <Styled.LottieWrapper>
      <Styled.Lottie ref={container} />
    </Styled.LottieWrapper>
  );
};

export default GraduationLottie;
