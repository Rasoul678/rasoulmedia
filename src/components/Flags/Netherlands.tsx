import Netherlands from "assets/flags/netherlands.png";
import * as Styled from "./Flags.styles";

const NetherlandsFlag = () => {
  return (
    <Styled.FlagContainer>
      <img src={Netherlands} alt="Netherlands" width="55%" />
    </Styled.FlagContainer>
  );
};

export default NetherlandsFlag;
