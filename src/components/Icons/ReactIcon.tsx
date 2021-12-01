import { RiReactjsLine } from "react-icons/ri";

interface ReactIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
}

const ReactIcon: React.FC<ReactIconProps> = (props) => {
  const { size, color, onClick } = props;

  return <RiReactjsLine onClick={onClick} size={size} color={color} />;
};

export default ReactIcon;
