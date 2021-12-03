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
  className?: string;
}

const LottieMaker = forwardRef<Lottie, LottieMakerProps>((props, ref) => {
  const {
    animationJSON,
    loop,
    autoplay,
    height,
    width,
    isStopped,
    speed,
    className,
  } = props;

  const defaultOptions: Options = {
    loop: loop,
    autoplay: autoplay,
    animationData: animationJSON,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className,
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
      isClickToPauseDisabled={true}
    />
  );
});

export default LottieMaker;
