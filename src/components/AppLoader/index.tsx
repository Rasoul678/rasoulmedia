import * as Styled from "./AppLoader.styles";

const AppLoader = () => {
  return (
    <Styled.AppLoaderContainer>
      <Styled.AppLoaderTextWrapper>
        Loading <Styled.AppLoaderDots>...</Styled.AppLoaderDots>
      </Styled.AppLoaderTextWrapper>
    </Styled.AppLoaderContainer>
  );
};

export default AppLoader;
