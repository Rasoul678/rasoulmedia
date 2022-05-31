import lottie from "lottie-web";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./TabletMenu.styles";

interface MenuItemProps {
  name: string;
  linkTo: string;
  children?: ReactNode;
}

const variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    x: -250,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: React.FC<MenuItemProps> = ({ name, linkTo, children }) => {
  return (
    <Styled.TabletMenuItem
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => lottie.play(name)}
      onMouseLeave={() => lottie.stop(name)}
    >
      <Styled.TabletMenuLink as={Link} to={linkTo}>
        {children}
        <Styled.TabletMenuText>{name}</Styled.TabletMenuText>
      </Styled.TabletMenuLink>
    </Styled.TabletMenuItem>
  );
};

export default MenuItem;
