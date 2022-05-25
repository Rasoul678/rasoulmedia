import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Instagram.styles";
import instagramJson from "assets/animations/lordicons/red/social-media-instagram (dark).json";

interface InstagramLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const InstagramLottie: React.FC<InstagramLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: instagramJson,
    name: props.name || "instagram",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default InstagramLottie;
