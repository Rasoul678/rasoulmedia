import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Linkedin.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface LinkedinLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const LinkedinLottie: React.FC<LinkedinLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [linkedinJson, setLinkedinJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${
        props.color || themeColorName
      }/social-media-linkedin.json`
    ).then((json) => {
      setLinkedinJson(json.default);
    });
  }, [themeColorName, props.color]);

  useLottie({
    container: container as any,
    animationData: linkedinJson,
    name: props.name || "linkedin",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(LinkedinLottie);
