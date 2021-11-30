import * as Styled from "./Button.styles";

type SizeType = "small" | "medium" | "large";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  size: SizeType;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, className, size, children } = props;

  return (
    <Styled.Button size={size} onClick={onClick} className={className}>
      {children}
    </Styled.Button>
  );
};

export default Button;
