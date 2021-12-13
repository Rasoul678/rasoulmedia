import Netherlands from "assets/flags/nl.svg";
import * as Styled from "./Flags.styles";

const NetherlandsFlag = () => {
  return (
    <Styled.FlagContainer>
      <Styled.Flag src={Netherlands} alt="Netherlands" width="55%" />
    </Styled.FlagContainer>
  );
};

export default NetherlandsFlag;
