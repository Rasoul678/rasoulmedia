import { InputHTMLAttributes } from "react";
import * as Styled from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ name, label, error, ...rest }) => {
  const { float } = window;
  
  return (
    <Styled.InputContainer>
      <Styled.Input
        dir={float}
        id={name}
        name={name}
        placeholder="placeholder"
        {...rest}
      />
      <Styled.Label dir={float} title={label} htmlFor={name} />
      <Styled.Indicator />
      {!!error && <Styled.Error>{error}</Styled.Error>}
    </Styled.InputContainer>
  );
};

export default Input;
