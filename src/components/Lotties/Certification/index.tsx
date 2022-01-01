import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/award.json";
import * as Styled from "./Certification.styles";

interface CertificationLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const CertificationLottie: React.FC<CertificationLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: props.name || "certification",
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default CertificationLottie;
