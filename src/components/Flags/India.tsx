import India from "assets/flags/in.svg";
import * as Styled from "./Flags.styles";

const IndiaFlag = () => {
  return (
    <Styled.FlagContainer>
      <Styled.Flag src={India} alt="India" width="55%" />
    </Styled.FlagContainer>
  );
};

export default IndiaFlag;
