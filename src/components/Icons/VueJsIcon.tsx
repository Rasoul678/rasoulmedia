import { SiVuedotjs } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface VueJsIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const VueJsIcon: React.FC<VueJsIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiVuedotjs
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default VueJsIcon;
