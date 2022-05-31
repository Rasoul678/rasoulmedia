import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

interface BoxProps extends CSSProperties {
  children?: ReactNode;
}

const Box: React.FC<BoxProps> = ({ children, ...rest }) => {
  return <div style={{ ...rest }}>{children}</div>;
};

export default Box;
