import { GoIssueOpened } from "react-icons/go";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface OpenIssueIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const OpenIssueIcon: React.FC<OpenIssueIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <GoIssueOpened
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default OpenIssueIcon;
