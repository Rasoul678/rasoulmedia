import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Facebook.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface FacebookLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const FacebookLottie: React.FC<FacebookLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [facebookJson, setFacebookJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${
        props.color || themeColorName
      }/social-media-facebook.json`
    ).then((json) => {
      setFacebookJson(json.default);
    });
  }, [themeColorName, props.color]);

  useLottie({
    container: container as any,
    animationData: facebookJson,
    name: props.name || "facebook",
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(FacebookLottie);
