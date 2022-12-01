import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Coral.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useStore } from "store/store";

interface CoralLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const CoralLottie: React.FC<CoralLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [coralJson, setCoralJson] = useState<any>(loadingJson);

  const { store } = useStore();
  const { themePallet, selectedPallet, themeMode } = store.global;

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${themeColorName}/1167-coral-outline-edited (${themeMode}).json`
    ).then((json) => {
      setCoralJson(json.default);
    });
  }, [themeColorName, themeMode]);

  useLottie({
    container: container as any,
    animationData: coralJson,
    name: props.name || "coral",
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(CoralLottie);
