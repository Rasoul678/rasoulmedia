import { FaStackOverflow } from "react-icons/fa";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface StackOverflowProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  onClick?: () => void;
}

const StackOverflowIcon: React.FC<StackOverflowProps> = (props) => {
  const { size, color, match, onClick } = props;
  const theme = useTheme();

  return (
    <FaStackOverflow
      onClick={onClick}
      size={size}
      color={!!match ? theme.border : color}
    />
  );
};

export default StackOverflowIcon;
