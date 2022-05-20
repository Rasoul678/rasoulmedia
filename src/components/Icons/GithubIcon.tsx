import { FaGithubSquare } from "react-icons/fa";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface GithubIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  onClick?: () => void;
}

const GithubIcon: React.FC<GithubIconProps> = (props) => {
  const { size, color, match, onClick } = props;
  const theme = useTheme();

  return (
    <FaGithubSquare
      onClick={onClick}
      size={size}
      color={!!match ? theme.border : color}
    />
  );
};

export default GithubIcon;
