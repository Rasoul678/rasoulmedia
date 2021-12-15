import { SiPhp } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface PHPIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const PHPIcon: React.FC<PHPIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiPhp
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default PHPIcon;
