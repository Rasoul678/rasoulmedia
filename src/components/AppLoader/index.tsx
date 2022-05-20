import * as Styled from "./AppLoader.styles";
import GoogleLoader from "components/CSSAnimations/google-loader";

const AppLoader = () => {
  return (
    <Styled.AppLoaderContainer>
      <GoogleLoader />
    </Styled.AppLoaderContainer>
  );
};

export default AppLoader;
