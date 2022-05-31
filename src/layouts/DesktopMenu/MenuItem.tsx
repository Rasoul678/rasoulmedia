import lottie from "lottie-web";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import * as Styled from "./DesktopMenu.styles";

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
    <Styled.MenuItem
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => lottie.play(name)}
      onMouseLeave={() => lottie.stop(name)}
    >
      <Styled.MenuLink as={Link} to={linkTo}>
        {children}
      </Styled.MenuLink>
    </Styled.MenuItem>
  );
};

export default MenuItem;
