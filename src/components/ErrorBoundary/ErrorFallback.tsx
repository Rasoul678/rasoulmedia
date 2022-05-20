import * as Styled from "./ErrorFallback.styles";

const ErrorFallback = () => {
  return (
    <Styled.ErrorFallbackContainer>
      <Styled.FallbackAnimationWrapper>
        <div>Something went wrong!</div>
      </Styled.FallbackAnimationWrapper>
    </Styled.ErrorFallbackContainer>
  );
};

export default ErrorFallback;
