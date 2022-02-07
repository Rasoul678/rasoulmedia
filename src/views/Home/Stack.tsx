import Button from "components/Button";
import * as Styled from "./Home.styles";

interface StackProps {
  title?: string;
  stack?: string[];
}

const Stack: React.FC<StackProps> = ({ stack, title }) => {
  return (
    <Styled.StackContainer>
      <h3>{title}:</h3>
      <Styled.StackWrapper>
        {stack?.map((s, i) => {
          return (
            <Button key={i} size="small">
              {s}
            </Button>
          );
        })}
      </Styled.StackWrapper>
    </Styled.StackContainer>
  );
};

export default Stack;
