import Slide from "react-reveal/Slide";

interface ISlide {
  left?: boolean;
  right?: boolean;
  duration?: number;
  cascade?: boolean;
}

const SlideAnimation: React.FC<ISlide> = (props) => {
  const { children, left, right, duration, cascade } = props;
  return (
    <Slide
      left={!!left}
      right={!!right}
      duration={duration}
      cascade={!!cascade}
    >
      {children}
    </Slide>
  );
};

export default SlideAnimation;
