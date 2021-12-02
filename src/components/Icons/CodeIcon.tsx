import { SiPolymerproject } from "react-icons/si";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";
interface CodeIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
}

const CodeIcon: React.FC<CodeIconProps> = (props) => {
  const { size, color, match } = props;
  const theme = useTheme();

  return (
    <SiPolymerproject size={size} color={!!match ? theme.border : color} />
  );
};

export default CodeIcon;
