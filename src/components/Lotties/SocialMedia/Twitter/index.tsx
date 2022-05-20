import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Twitter.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface TwitterLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const TwitterLottie: React.FC<TwitterLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [twitterJson, setTwitterJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet, themeMode } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${
        props.color || themeColorName
      }/social-media-twitter (${themeMode}).json`
    ).then((json) => {
      setTwitterJson(json.default);
    });
  }, [themeColorName, props.color]);

  useLottie({
    container: container as any,
    animationData: twitterJson,
    name: props.name || "twitter",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(TwitterLottie);
