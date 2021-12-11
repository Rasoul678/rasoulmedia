import * as Styled from "./ErrorFallback.styles";
import LottieMaker from "components/LottieMaker";
import ErrorFallbackJson from "assets/animations/73059-search-not-found.json";

const ErrorFallback = () => {
  return (
    <Styled.ErrorFallbackContainer>
      <Styled.FallbackAnimationWrapper>
        <LottieMaker animationJSON={ErrorFallbackJson} width="20rem" />
        <div>Something went wrong!</div>
      </Styled.FallbackAnimationWrapper>
    </Styled.ErrorFallbackContainer>
  );
};

export default ErrorFallback;
