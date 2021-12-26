import { useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/graduation.json";
import * as Styled from "./Graduation.styles";

interface GraduationLottieProps {}

const GraduationLottie: React.FC<GraduationLottieProps> = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: "graduation-v1",
  });

  return (
    <Styled.LottieWrapper>
      <Styled.Lottie ref={container} />
    </Styled.LottieWrapper>
  );
};

export default GraduationLottie;
