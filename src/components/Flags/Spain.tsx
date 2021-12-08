import Spain from "assets/flags/spain.png";
import * as Styled from "./Flags.styles";

const SpainFlag = () => {
  return (
    <Styled.FlagContainer>
      <img src={Spain} alt="Spain" width="55%" />
    </Styled.FlagContainer>
  );
};

export default SpainFlag;
