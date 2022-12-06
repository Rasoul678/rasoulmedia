import { GiMoonBats } from "react-icons/gi";
import { PathMatch } from "react-router";
import useTheme from "hooks/useTheme";

interface MoonIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
}

const MoonIcon: React.FC<MoonIconProps> = (props) => {
  const { size, color, match, className } = props;
  const theme = useTheme();

  return (
    <GiMoonBats
      size={size}
      color={!!match ? theme.border : color}
      className={className}
    />
  );
};

export default MoonIcon;
