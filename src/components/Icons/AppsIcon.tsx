import { IoIosApps } from "react-icons/io";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";
interface AppsIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
}

const AppsIcon: React.FC<AppsIconProps> = (props) => {
  const { size, color, match } = props;
  const theme = useTheme();

  return <IoIosApps size={size} color={!!match ? theme.border : color} />;
};

export default AppsIcon;
