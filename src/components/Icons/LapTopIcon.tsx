import { FaLaptop } from "react-icons/fa";
import CSS from "csstype";

interface LapTopIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: CSS.Properties;
}

const LapTopIcon: React.FC<LapTopIconProps> = (props) => {
  const { size, color, onClick } = props;

  return <FaLaptop onClick={onClick} size={size} color={color} />;
};

export default LapTopIcon;
