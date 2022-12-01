import * as Styled from "./Footer.styles";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Styled.FooterContainer>
      <Styled.FooterText>
        © {new Date().getFullYear()} Rasoul Hesami Rostami. All rights reserved.
      </Styled.FooterText>
    </Styled.FooterContainer>
  );
};

export default Footer;
