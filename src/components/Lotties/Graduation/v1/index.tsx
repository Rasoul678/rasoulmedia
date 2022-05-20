import { HTMLAttributes, memo, useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/graduation.json";
import * as Styled from "./Graduation.styles";

interface GraduationLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const GraduationLottie: React.FC<GraduationLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: props.name || "graduation-v1",
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default memo(GraduationLottie);
