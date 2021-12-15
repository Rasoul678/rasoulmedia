import { SiTypescript } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface TypescriptIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const TypescriptIcon: React.FC<TypescriptIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiTypescript
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default TypescriptIcon;
