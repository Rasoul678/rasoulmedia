import { FaMobileAlt } from "react-icons/fa";
import CSS from 'csstype';

interface MobileIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: CSS.Properties;
}

const MobileIcon: React.FC<MobileIconProps> = (props) => {
  const { size, color, onClick } = props;

  return <FaMobileAlt onClick={onClick} size={size} color={color} />;
};

export default MobileIcon;
