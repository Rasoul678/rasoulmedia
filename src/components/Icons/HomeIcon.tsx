import { HiHome } from "react-icons/hi";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface HomeIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
}

const HomeIcon: React.FC<HomeIconProps> = (props) => {
  const { size, color, match } = props;
  const theme = useTheme();

  return <HiHome size={size} color={!!match ? theme.border : color} />;
};

export default HomeIcon;
