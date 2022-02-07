import * as Styled from "./Footer.styles";
import CoralLottie from "../Lotties/Coral";
import AlgaeLottie from "../Lotties/Algae";
import OnMobile from "components/MediaQuery/Mobile";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Styled.FooterContainer>
      <Styled.FooterText>
        Made by ❤️ | {new Date().getFullYear()}
      </Styled.FooterText>
      <OnMobile>
        <Styled.SeaCreaturesWrapper>
          <CoralLottie name="coral1" />
          <AlgaeLottie name="algae1" />
          <CoralLottie name="coral2" />
          <AlgaeLottie name="algae2" />
        </Styled.SeaCreaturesWrapper>
      </OnMobile>
      <Styled.FooterWaves
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <Styled.FooterParallax>
          <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use href="#gentle-wave" x="48" y="7" fill="#fff" />
        </Styled.FooterParallax>
      </Styled.FooterWaves>
    </Styled.FooterContainer>
  );
};

export default Footer;
