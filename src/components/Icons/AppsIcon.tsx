import { IoIosApps } from "react-icons/io";

interface AppsIconProps {
  size?: number;
  color?: string;
}

const AppsIcon: React.FC<AppsIconProps> = (props) => {
  const { size, color } = props;

  return <IoIosApps size={size} color={color} />;
};

export default AppsIcon;
