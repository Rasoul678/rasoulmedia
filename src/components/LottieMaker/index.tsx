import { ReactNode, forwardRef } from "react";
import Lottie, { Options } from "react-lottie";

interface LottieMakerProps {
  animationJSON: ReactNode;
  loop?: boolean;
  autoplay?: boolean;
  height?: string;
  width?: string;
  isStopped?: boolean;
  speed?: number;
}

const LottieMaker = forwardRef<Lottie, LottieMakerProps>((props, ref) => {
  const { animationJSON, loop, autoplay, height, width, isStopped, speed } =
    props;

  const defaultOptions: Options = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationJSON,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      ref={ref}
      speed={speed}
      options={defaultOptions}
      height={height}
      width={width}
      isStopped={isStopped}
    />
  );
});

export default LottieMaker;
