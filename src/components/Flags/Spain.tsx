import { ReactComponent as Spain } from "assets/flags/es.svg";
import * as Styled from "./Flags.styles";

const SpainFlag = () => {
  return (
    <Styled.FlagContainer>
      <Spain width="60%" />
    </Styled.FlagContainer>
  );
};

export default SpainFlag;
