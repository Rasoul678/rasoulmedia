import { GiPaintRoller } from "react-icons/gi";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface PaintRollerIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
}

const PaintRollerIcon: React.FC<PaintRollerIconProps> = (props) => {
  const { size, color, match, className } = props;
  const theme = useTheme();

  return (
    <GiPaintRoller
      size={size}
      color={!!match ? theme.border : color}
      className={className}
    />
  );
};

export default PaintRollerIcon;
