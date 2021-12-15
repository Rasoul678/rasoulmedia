import { CgGitFork } from "react-icons/cg";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface GitForkIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const GitForkIcon: React.FC<GitForkIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <CgGitFork
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default GitForkIcon;
