import { MdPermContactCalendar } from "react-icons/md";
import { PathMatch } from "react-router";
import { useTheme } from "styled-components";

interface ContactIconProps {
  size?: number;
  color?: string;
  match?: PathMatch<string> | null;
}

const ContactIcon: React.FC<ContactIconProps> = (props) => {
  const { size, color, match } = props;
  const theme = useTheme();

  return <MdPermContactCalendar size={size} color={!!match ? theme.border : color} />;
};

export default ContactIcon;
