import { SiCss3 } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface CSS3IconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const CSS3Icon: React.FC<CSS3IconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiCss3
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default CSS3Icon;
