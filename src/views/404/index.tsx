import { useRef } from "react";
import NotFoundJson from "assets/animations/75244-analyse.json";
import * as Styled from "./NotFound.styles";
import useLottie from "hooks/useLottie";

const NotFound: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: NotFoundJson,
    name: "not found",
  });
  
  return (
    <Styled.NotFoundContainer>
      <h1>Not Found</h1>
      <div ref={container} />
    </Styled.NotFoundContainer>
  );
};

export default NotFound;
