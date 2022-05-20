import { HTMLAttributes, useRef, Suspense, useEffect, useState, memo } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Coral.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface CoralLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const CoralLottie: React.FC<CoralLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [coralJson, setCoralJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet, themeMode } = useTypedSelector(
    (state) => state.global
  );

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
