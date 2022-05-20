import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { Children, cloneElement, isValidElement, ReactNode } from "react";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} {...props}>
      {Children.map<ReactNode, ReactNode>(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { match });
        }
      })}
    </Link>
  );
};

export default CustomLink;
