import { ReactComponent as Netherlands } from "assets/flags/nl.svg";
import * as Styled from "./Flags.styles";

const NetherlandsFlag = () => {
  return (
    <Styled.FlagContainer>
      <Netherlands width="60%" />
    </Styled.FlagContainer>
  );
};

export default NetherlandsFlag;
