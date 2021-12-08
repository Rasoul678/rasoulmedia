import Iran from "assets/flags/iran.png";
import IranRoyal from "assets/flags/iran-royal.png";
import * as Styled from "./Flags.styles";

const IranFlag = () => {
  return (
    <Styled.FlagContainer>
      <img src={Iran} alt="Iran" width="55%" />
      <img
        src={IranRoyal}
        alt="Iran-Royal"
        width="35%"
        style={{ position: "absolute" }}
      />
    </Styled.FlagContainer>
  );
};

export default IranFlag;
