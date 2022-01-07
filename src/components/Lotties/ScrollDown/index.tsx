import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./ScrollDown.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface ScrollDownLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const ScrollDownLottie: React.FC<ScrollDownLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [scrollDownJson, setScrollDownJson] = useState<any>(loadingJson);
  const { themeMode } = useTypedSelector((state) => state.global);

  useEffect(() => {
    import(`assets/animations/34342-arrow-down-icon-${themeMode}.json`).then(
      (json) => {
        setScrollDownJson(json.default);
      }
    );
  }, [themeMode]);

  useLottie({
    container: container as any,
    animationData: scrollDownJson,
    name: props.name || "scroll-down",
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(ScrollDownLottie);
