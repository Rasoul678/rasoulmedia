import { FaEye } from "react-icons/fa";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface EyeIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const EyeIcon: React.FC<EyeIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <FaEye
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default EyeIcon;
