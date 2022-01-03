import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Button.styles";
import json from "assets/animations/lordicons/333-loader-4-edited.json";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  size: "small" | "medium" | "large";
  isLoading?: boolean;
  loaderJson?: any;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, size, isLoading, loaderJson, fullWidth, children, ...rest } =
    props;
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: loaderJson || json,
    name: "send-email",
  });

  const handleClickButton = () => {
    if (!isLoading) {
      onClick?.();
    }
  };

  return (
    <Styled.Button
      fullWidth={fullWidth}
      size={size}
      onClick={handleClickButton}
      {...rest}
    >
      <Styled.ButtonLottie isShown={isLoading} ref={container} />
      {!isLoading && children}
    </Styled.Button>
  );
};

export default Button;
