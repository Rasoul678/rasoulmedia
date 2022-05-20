import { SiLinkedin } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface LinkedinIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  onClick?: () => void;
}

const LinkedinIcon: React.FC<LinkedinIconProps> = (props) => {
  const { size, color, match, onClick } = props;
  const theme = useTheme();

  return (
    <SiLinkedin
      onClick={onClick}
      size={size}
      color={!!match ? theme.border : color}
    />
  );
};

export default LinkedinIcon;
