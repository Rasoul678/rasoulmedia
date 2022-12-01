import {
  HTMLAttributes,
  useRef,
  Suspense,
  useEffect,
  useState,
  memo,
} from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Algae.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useStore } from "store/store";

interface AlgaeLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const AlgaeLottie: React.FC<AlgaeLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [algaeJson, setAlgaeJson] = useState<any>(loadingJson);
  const { store } = useStore();
  const { themeMode } = store.global;

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

export default memo(AlgaeLottie);
