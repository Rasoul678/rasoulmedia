import { ReactComponent as Iran } from "assets/flags/ir.svg";
import * as Styled from "./Flags.styles";

const IranFlag = () => {
  return (
    <Styled.FlagContainer>
      <Iran width="60%" />
    </Styled.FlagContainer>
  );
};

export default IranFlag;
