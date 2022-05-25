import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Code.styles";
import codeJson from "assets/animations/lordicons/red/742-multimedia-code-1-outline-edited (dark).json";

interface CodeLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const CodeLottie: React.FC<CodeLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: codeJson,
    name: props.name || "code",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default CodeLottie;
