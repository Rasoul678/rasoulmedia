import { SiReactrouter } from "react-icons/si";
import CSS from 'csstype';

interface MenuIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
  style?: CSS.Properties;
}

const MenuIcon: React.FC<MenuIconProps> = (props) => {
  const { size, color, onClick } = props;

  return <SiReactrouter onClick={onClick} size={size} color={color} />;
};

export default MenuIcon;
