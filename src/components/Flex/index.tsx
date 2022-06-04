import { forwardRef, ReactNode } from "react";
import { CSSProperties } from "styled-components";
import * as Styled from "./Flex.styles";

interface FlexProps extends CSSProperties {
  children?: ReactNode;
}

type Ref = HTMLDivElement;

const Flex = forwardRef<Ref, FlexProps>(({ children, ...rest }, ref) => {
  return (
    <Styled.Flex style={{ display: "flex", ...rest }} ref={ref}>
      {children}
    </Styled.Flex>
  );
});

export default Flex;
