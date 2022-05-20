import { HiExternalLink } from "react-icons/hi";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface ExternalLinkIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <HiExternalLink
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default ExternalLinkIcon;
