import { HTMLAttributes, useRef, Suspense, useEffect, useState, memo } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Home.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface HomeLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const HomeLottie: React.FC<HomeLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [homeJson, setHomeJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet, themeMode } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${themeColorName}/63-home-outline-edited (${themeMode}).json`
    ).then((json) => {
      setHomeJson(json.default);
    });
  }, [themeColorName, themeMode]);

  useLottie({
    container: container as any,
    animationData: homeJson,
    name: props.name || "home",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(HomeLottie);
