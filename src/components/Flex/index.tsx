import { CSSProperties } from "styled-components";
import * as Styled from "./Flex.styles";

interface FlexProps extends CSSProperties {}

const Flex: React.FC<FlexProps> = ({ children, ...rest }) => {
  return <Styled.Flex style={{ ...rest }}>{children}</Styled.Flex>;
};

export default Flex;
