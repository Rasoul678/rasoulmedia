import USA from "assets/flags/united-states.png";
import * as Styled from "./Flags.styles";

const USAFlag = () => {
  return (
    <Styled.FlagContainer>
      <img src={USA} alt="USA" width="55%" />
    </Styled.FlagContainer>
  );
};

export default USAFlag;
