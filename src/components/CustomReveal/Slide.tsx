import Slide from "react-reveal/Slide";
import { RevealProps } from "interfaces";

const SlideAnimation: React.FC<RevealProps> = (props) => {
  const { children, ...rest } = props;
  return <Slide {...rest}>{children}</Slide>;
};

export default SlideAnimation;
