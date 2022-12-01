import { HTMLAttributes, Suspense, useEffect, useState, memo } from "react";
import * as Styled from "./ThankYou.styles";
import { useStore } from "store/store";

interface ThankSvgProps extends HTMLAttributes<HTMLOrSVGElement> {}

const ThankSvg: React.FC<ThankSvgProps> = (props) => {
  const [svg, setSvg] = useState<any>(null);

  const { store } = useStore();
  const { themePallet, selectedPallet } = store.global;

  const themeColorName = themePallet.pallets[selectedPallet].name;

  useEffect(() => {
    import(
      `assets/svg/freepick/Super thank you-amico (${themeColorName}).svg`
    ).then((svg) => {
      setSvg(svg.default);
    });
  }, [themeColorName]);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Styled.ThankImg src={svg} alt="Thank You!" />
    </Suspense>
  );
};

export default memo(ThankSvg);
