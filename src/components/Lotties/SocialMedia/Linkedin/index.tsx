import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Linkedin.styles";
import linkedinJson from "assets/animations/lordicons/red/social-media-linkedin (dark).json";

interface LinkedinLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const LinkedinLottie: React.FC<LinkedinLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: linkedinJson,
    name: props.name || "linkedin",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default LinkedinLottie;
