import { useEffect } from "react";
import lottie, { AnimationConfigWithData } from "lottie-web";

const useLottie = (options: AnimationConfigWithData) => {
  const {
    animationData,
    container,
    autoplay = true,
    loop = true,
    name = "",
  } = options;

  useEffect(() => {
    lottie.loadAnimation({
      container: (container as any).current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
      name,
    });

    return () => {
      lottie.destroy(name);
    };
  }, [animationData, autoplay, loop, name, container]);

  return lottie;
};

export default useLottie;
