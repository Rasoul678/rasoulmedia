import { ReactComponent as France } from "assets/flags/fr.svg";
import * as Styled from "./Flags.styles";

const FranceFlag = () => {
  return (
    <Styled.FlagContainer>
      <France />
    </Styled.FlagContainer>
  );
};

export default FranceFlag;
