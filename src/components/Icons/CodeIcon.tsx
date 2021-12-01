import { SiPolymerproject } from "react-icons/si";

interface CodeIconProps {
  size?: number;
  color?: string;
}

const CodeIcon: React.FC<CodeIconProps> = (props) => {
  const { size, color } = props;

  return <SiPolymerproject size={size} color={color} />;
};

export default CodeIcon;
