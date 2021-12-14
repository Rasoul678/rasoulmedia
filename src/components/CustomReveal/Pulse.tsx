import Pulse from "react-reveal/Pulse";
import { RevealProps } from "interfaces";

const PulseAnimation: React.FC<RevealProps> = (props) => {
  const { children, ...rest } = props;
  return <Pulse {...rest}>{children}</Pulse>;
};

export default PulseAnimation;
