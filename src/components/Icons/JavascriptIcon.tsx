import { SiJavascript } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface JavascriptIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
  className?: string;
  onClick?: () => void;
}

const JavascriptIcon: React.FC<JavascriptIconProps> = (props) => {
  const { size, color, match, className, onClick } = props;
  const theme = useTheme();

  return (
    <SiJavascript
      size={size}
      color={!!match ? theme.border : color}
      className={className}
      onClick={onClick}
    />
  );
};

export default JavascriptIcon;
