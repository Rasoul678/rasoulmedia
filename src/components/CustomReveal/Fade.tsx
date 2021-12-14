import Fade from "react-reveal/Fade";
import { RevealProps } from "interfaces";

const FadeAnimation: React.FC<RevealProps> = (props) => {
  const { children, ...rest } = props;
  return <Fade {...rest}>{children}</Fade>;
};

export default FadeAnimation;
