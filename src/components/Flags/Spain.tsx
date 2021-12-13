import Spain from "assets/flags/es.svg";
import * as Styled from "./Flags.styles";

const SpainFlag = () => {
  return (
    <Styled.FlagContainer>
      <Styled.Flag src={Spain} alt="Spain" width="55%" />
    </Styled.FlagContainer>
  );
};

export default SpainFlag;
