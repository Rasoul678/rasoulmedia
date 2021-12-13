import British from "assets/flags/gb.svg";
import * as Styled from "./Flags.styles";

const BritishFlag = () => {
  return (
    <Styled.FlagContainer>
      <Styled.Flag src={British} alt="British" width="55%" />
    </Styled.FlagContainer>
  );
};

export default BritishFlag;
