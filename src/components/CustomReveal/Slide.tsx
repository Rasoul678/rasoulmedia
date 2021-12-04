import Slide from "react-reveal/Slide";
import { RevealProps } from "types";

const SlideAnimation: React.FC<RevealProps> = (props) => {
  const { children, ...rest } = props;
  return <Slide {...rest}>{children}</Slide>;
};

export default SlideAnimation;
