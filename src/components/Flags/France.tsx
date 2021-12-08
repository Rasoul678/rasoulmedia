import France from "assets/flags/france.png";
import * as Styled from "./Flags.styles";

const FranceFlag = () => {
  return (
    <Styled.FlagContainer>
      <Styled.Flag src={France} alt="France" width="55%"  />
    </Styled.FlagContainer>
  );
};

export default FranceFlag;
