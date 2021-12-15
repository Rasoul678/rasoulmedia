import { SiHtml5 } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface HTML5IconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const HTML5Icon: React.FC<HTML5IconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiHtml5
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default HTML5Icon;
