import * as Styled from "./Footer.styles";
import CoralLottie from "../Lotties/Coral";
import AlgaeLottie from "../Lotties/Algae";
import Wave from "./Wave";

interface FooterProps {
  color: string;
}

const Footer: React.FC<FooterProps> = ({ color }) => {
  return (
    <Styled.FooterContainer>
      <Styled.SeaCreaturesWrapper>
        <CoralLottie name="coral1" />
        <AlgaeLottie name="algae1" />
        <CoralLottie name="coral2" />
        <AlgaeLottie name="algae2" />
      </Styled.SeaCreaturesWrapper>
      <Wave color={color} />
    </Styled.FooterContainer>
  );
};

export default Footer;
