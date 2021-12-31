import { useRef } from "react";
import * as Styled from "./Footer.styles";
import algaeJson from "assets/animations/lordicons/green/1841-algae-outline-edited (dark).json";
import coralJson from "assets/animations/lordicons/green/1167-coral-outline-edited (dark).json";
import useLottie from "hooks/useLottie";

interface FooterProps {
  color: string;
}

const Footer: React.FC<FooterProps> = ({ color }) => {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: ref1 as any,
    animationData: coralJson,
    name: "json1",
  });
  useLottie({
    container: ref2 as any,
    animationData: algaeJson,
    name: "json2",
  });
  useLottie({
    container: ref3 as any,
    animationData: coralJson,
    name: "json3",
  });
  useLottie({
    container: ref4 as any,
    animationData: algaeJson,
    name: "json4",
  });

  return (
    <Styled.FooterContainer>
      <Styled.AlgaeWrapper>
        <div ref={ref1} />
        <div ref={ref2} />
        <div ref={ref3} />
        <div ref={ref4} />
      </Styled.AlgaeWrapper>
      <div style={{ display: "flex" }}>
        <svg
          id="footer"
          // viewBox="0 0 1500 100"
          width="1500"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 46L12.5 50.2C25 54.3 50 62.7 75 60.7C100 58.7 125 46.3 150 42.5C175 38.7 200 43.3 225 44.7C250 46 275 44 300 47.2C325 50.3 350 58.7 375 59.5C400 60.3 425 53.7 450 54.3C475 55 500 63 525 67.7C550 72.3 575 73.7 600 70C625 66.3 650 57.7 675 52.7C700 47.7 725 46.3 750 50C775 53.7 800 62.3 825 62.2C850 62 875 53 900 47.5C925 42 950 40 975 38.2C1000 36.3 1025 34.7 1050 38.2C1075 41.7 1100 50.3 1125 56.8C1150 63.3 1175 67.7 1200 64.2C1225 60.7 1250 49.3 1275 47.7C1300 46 1325 54 1350 54.8C1375 55.7 1400 49.3 1425 46.8C1450 44.3 1475 45.7 1487.5 46.3L1500 47L1500 101L1487.5 101C1475 101 1450 101 1425 101C1400 101 1375 101 1350 101C1325 101 1300 101 1275 101C1250 101 1225 101 1200 101C1175 101 1150 101 1125 101C1100 101 1075 101 1050 101C1025 101 1000 101 975 101C950 101 925 101 900 101C875 101 850 101 825 101C800 101 775 101 750 101C725 101 700 101 675 101C650 101 625 101 600 101C575 101 550 101 525 101C500 101 475 101 450 101C425 101 400 101 375 101C350 101 325 101 300 101C275 101 250 101 225 101C200 101 175 101 150 101C125 101 100 101 75 101C50 101 25 101 12.5 101L0 101Z"
            fill={color}
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>
      </div>
    </Styled.FooterContainer>
  );
};

export default Footer;
