import { SiTailwindcss } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface TailwindIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const TailwindIcon: React.FC<TailwindIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiTailwindcss
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default TailwindIcon;
