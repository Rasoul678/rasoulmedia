import { HTMLAttributes, useRef, Suspense, useEffect, useState, memo } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Contact.styles";
import loadingJson from "assets/animations/lordicons/333-loader-4-edited.json";
import { useTypedSelector } from "hooks/useTypedSelector";

interface ContactLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const ContactLottie: React.FC<ContactLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [contactJson, setContactJson] = useState<any>(loadingJson);
  const { themePallet, selectedPallet, themeMode } = useTypedSelector(
    (state) => state.global
  );

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/animations/lordicons/${themeColorName}/981-consultation-outline-edited (${themeMode}).json`
    ).then((json) => {
      setContactJson(json.default);
    });
  }, [themeColorName, themeMode]);

  useLottie({
    container: container as any,
    animationData: contactJson,
    name: props.name || "contact",
    loop: false,
  });

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.Lottie ref={container} {...props} />
    </Suspense>
  );
};

export default memo(ContactLottie);
