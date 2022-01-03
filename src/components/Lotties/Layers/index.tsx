import { HTMLAttributes, useRef, Suspense, useEffect, useState, memo } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Layers.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface LayersLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const LayersLottie: React.FC<LayersLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [layersJson, setLayersJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet, themeMode } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${themeColorName}/12-layes-outline-edited (${themeMode}).json`
    ).then((json) => {
      setLayersJson(json.default);
    });
  }, [themeColorName, themeMode]);

  useLottie({
    container: container as any,
    animationData: layersJson,
    name: props.name || "apps",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(LayersLottie);
