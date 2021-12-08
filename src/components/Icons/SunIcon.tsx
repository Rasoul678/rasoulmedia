import { HiSun } from "react-icons/hi";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface SunIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
}

const SunIcon: React.FC<SunIconProps> = (props) => {
  const { size, color, match } = props;
  const theme = useTheme();

  return <HiSun size={size} color={!!match ? theme.border : color} />;
};

export default SunIcon;
