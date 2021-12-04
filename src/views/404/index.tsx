import LottieMaker from "components/LottieMaker";
import NotFoundJson from "assets/animations/75244-analyse.json";
import * as Styled from "./NotFound.styles";

const NotFound: React.FC = () => {
  return (
    <Styled.NotFoundContainer>
      <h1>Not Found</h1>
      <LottieMaker
        animationJSON={NotFoundJson}
        autoplay
        width="20rem"
        height="20rem"
      />
    </Styled.NotFoundContainer>
  );
};

export default NotFound;
