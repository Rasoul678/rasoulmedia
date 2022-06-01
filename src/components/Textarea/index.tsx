import { TextareaHTMLAttributes } from "react";
import * as Styled from "./Textarea.styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, error, ...rest }) => {
  const { float } = window;

  return (
    <Styled.TextareaContainer>
      <Styled.Textarea
        dir={float}
        id={name}
        name={name}
        placeholder="placeholder"
        {...rest}
      />
      <Styled.Label dir={float} title={label} htmlFor={name} />
      <Styled.Indicator />
      {!!error && <Styled.Error>{error}</Styled.Error>}
    </Styled.TextareaContainer>
  );
};

export default Textarea;
