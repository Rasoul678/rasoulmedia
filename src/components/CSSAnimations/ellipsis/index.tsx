import * as Styled from "./Ellipsis.styles";

const Ellipsis = () => {
  return (
    <Styled.DotsWrapper>
      {[...Array(4)].map((_, i) => (
        <Styled.Dot key={i} />
      ))}
    </Styled.DotsWrapper>
  );
};

export default Ellipsis;
