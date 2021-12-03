import Fade from "react-reveal/Fade";

interface IFade {
  left?: boolean;
  right?: boolean;
}

const FadeAnimation: React.FC<IFade> = (props) => {
  const { children, left, right } = props;
  return (
    <Fade left={!!left} right={!!right}>
      {children}
    </Fade>
  );
};

export default FadeAnimation;
