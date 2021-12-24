import { ReactComponent as British } from "assets/flags/gb.svg";
import * as Styled from "./Flags.styles";

const BritishFlag = () => {
  return (
    <Styled.FlagContainer>
      <British width="60%" />
    </Styled.FlagContainer>
  );
};

export default BritishFlag;
