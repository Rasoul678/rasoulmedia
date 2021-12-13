import Iran from "assets/flags/ir.svg";
import * as Styled from "./Flags.styles";

const IranFlag = () => {
  return (
    <Styled.FlagContainer>
      <Styled.Flag src={Iran} alt="Iran" width="55%" />
    </Styled.FlagContainer>
  );
};

export default IranFlag;
