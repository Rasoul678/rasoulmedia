import { SiReactrouter } from "react-icons/si";

interface MenuIconProps {
  size?: number;
  color?: string;
  onClick?: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = (props) => {
  const { size, color, onClick } = props;

  return <SiReactrouter onClick={onClick} size={size} color={color} />;
};

export default MenuIcon;
