import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Facebook.styles";
import facebookJson from "assets/animations/lordicons/red/social-media-facebook (dark).json";

interface FacebookLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const FacebookLottie: React.FC<FacebookLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: facebookJson,
    name: props.name || "facebook",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default FacebookLottie;
