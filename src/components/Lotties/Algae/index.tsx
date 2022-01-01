import { HTMLAttributes, useRef, Suspense, useEffect, useState } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Algae.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface AlgaeLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const AlgaeLottie: React.FC<AlgaeLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [algaeJson, setAlgaeJson] = useState<any>(loadingJson);
  const {
    // themePallet,
    //  selectedPallet,
    themeMode,
  } = useTypedSelector((state) => state.global);

  // const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/green/1841-algae-outline-edited (${themeMode}).json`
    ).then((json) => {
      setAlgaeJson(json.default);
    });
  }, [themeMode]);

  useLottie({
    container: container as any,
    animationData: algaeJson,
    name: props.name || "algae",
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default AlgaeLottie;
