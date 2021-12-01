import { MdPermContactCalendar } from "react-icons/md";

interface ContactIconProps {
  size?: number;
  color?: string;
}

const ContactIcon: React.FC<ContactIconProps> = (props) => {
  const { size, color } = props;

  return <MdPermContactCalendar size={size} color={color} />;
};

export default ContactIcon;
