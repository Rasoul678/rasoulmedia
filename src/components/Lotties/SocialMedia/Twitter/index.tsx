import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Twitter.styles";
import twitterJson from "assets/animations/lordicons/red/social-media-twitter (dark).json";

interface TwitterLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const TwitterLottie: React.FC<TwitterLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: twitterJson,
    name: props.name || "twitter",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default TwitterLottie;
