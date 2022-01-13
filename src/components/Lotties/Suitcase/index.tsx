import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Suitcase.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";

interface SuitcaseLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const SuitcaseLottie: React.FC<SuitcaseLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [suitcaseJson, setSuitcaseJson] = useState<any>(loadingJson);

  useEffect(() => {
    import(
      `assets/animations/lordicons/green/187-suitcase-outline-edited (dark).json`
    ).then((json) => {
      setSuitcaseJson(json.default);
    });
  }, []);

  useLottie({
    container: container as any,
    animationData: suitcaseJson,
    name: props.name || "suitcase",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(SuitcaseLottie);
