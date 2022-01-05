import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Instagram.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface InstagramLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  color?: string;
}

const InstagramLottie: React.FC<InstagramLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [instagramJson, setInstagramJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet, themeMode } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${
        props.color || themeColorName
      }/social-media-instagram (${themeMode}).json`
    ).then((json) => {
      setInstagramJson(json.default);
    });
  }, [themeColorName, props.color]);

  useLottie({
    container: container as any,
    animationData: instagramJson,
    name: props.name || "instagram",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(InstagramLottie);
