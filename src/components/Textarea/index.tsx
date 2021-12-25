import { TextareaHTMLAttributes } from "react";
import * as Styled from "./Textarea.styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, error, ...rest }) => {
  return (
    <Styled.TextareaContainer>
      <Styled.Textarea
        id={name}
        name={name}
        placeholder="placeholder"
        {...rest}
      />
      <Styled.Label title={label} htmlFor={name} />
      <Styled.Indicator />
      <Styled.Error>{error}</Styled.Error>
    </Styled.TextareaContainer>
  );
};

export default Textarea;
