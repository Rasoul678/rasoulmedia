import { SiDocker } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface DockerIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const DockerIcon: React.FC<DockerIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiDocker
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default DockerIcon;
