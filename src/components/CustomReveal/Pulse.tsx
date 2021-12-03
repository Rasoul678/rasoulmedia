import Pulse from "react-reveal/Pulse";

interface IPulse {
  left?: boolean;
  right?: boolean;
  duration?: number;
}

const PulseAnimation: React.FC<IPulse> = (props) => {
  const { children, left, right, duration } = props;
  return (
    <Pulse left={!!left} right={!!right} duration={duration}>
      {children}
    </Pulse>
  );
};

export default PulseAnimation;
