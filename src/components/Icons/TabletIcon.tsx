import { FaTabletAlt } from "react-icons/fa";
import CSS from 'csstype';

interface TabletIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: CSS.Properties;
}

const TabletIcon: React.FC<TabletIconProps> = (props) => {
  const { size, color, onClick } = props;

  return <FaTabletAlt onClick={onClick} size={size} color={color} />;
};

export default TabletIcon;
