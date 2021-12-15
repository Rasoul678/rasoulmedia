import { FaStar } from "react-icons/fa";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface StarIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const StarIcon: React.FC<StarIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <FaStar
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default StarIcon;
