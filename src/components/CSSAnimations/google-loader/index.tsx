import * as Styled from "./GoogleLoader.styles";

const Ellipsis = () => {
  return (
    <Styled.DotsWrapper>
      {[...Array(4)].map((_, i) => (
        <Styled.Circle key={i} />
      ))}
    </Styled.DotsWrapper>
  );
};

export default Ellipsis;
