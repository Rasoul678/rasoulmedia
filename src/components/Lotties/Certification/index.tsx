import { useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/award.json";
import * as Styled from "./Certification.styles";

interface CertificationLottieProps {}

const CertificationLottie: React.FC<CertificationLottieProps> = () => {
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

export default CertificationLottie;
