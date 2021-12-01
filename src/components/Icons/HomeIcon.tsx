import { HiHome } from "react-icons/hi";

interface HomeIconProps {
  size?: number;
  color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = (props) => {
  const { size, color } = props;

  return <HiHome size={size} color={color} />;
};

export default HomeIcon;
