import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./ColorPick.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";

interface ColorPickLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color: string;
}

const ColorPickLottie: React.FC<ColorPickLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [codeJson, setCodeJson] = useState<any>(loadingJson);

  useEffect(() => {
    import(
      `assets/animations/lordicons/${props.color}/color-pick-dark.json`
    ).then((json) => {
      setCodeJson(json.default);
    });
  }, [props.color]);

  useLottie({
    container: container as any,
    animationData: codeJson,
    name: props.name || "color-pick",
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(ColorPickLottie);
