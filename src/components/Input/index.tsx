import { InputHTMLAttributes } from "react";
import * as Styled from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ name, label, error, ...rest }) => {
  return (
    <Styled.InputContainer>
      <Styled.Input id={name} name={name} placeholder="placeholder" {...rest} />
      <Styled.Label title={label} htmlFor={name} />
      <Styled.Indicator
        style={!!error ? { bottom: "1.35rem" } : { bottom: "0" }}
      />
      {!!error && <Styled.Error>{error}</Styled.Error>}
    </Styled.InputContainer>
  );
};

export default Input;
