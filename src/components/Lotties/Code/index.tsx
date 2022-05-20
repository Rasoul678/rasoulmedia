import { HTMLAttributes, useRef, Suspense, useEffect, useState, memo } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Code.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface CodeLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const CodeLottie: React.FC<CodeLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [codeJson, setCodeJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet, themeMode } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${themeColorName}/742-multimedia-code-1-outline-edited (${themeMode}).json`
    ).then((json) => {
      setCodeJson(json.default);
    });
  }, [themeColorName, themeMode]);

  useLottie({
    container: container as any,
    animationData: codeJson,
    name: props.name || "code",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(CodeLottie);
