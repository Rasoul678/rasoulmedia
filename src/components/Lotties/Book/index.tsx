import { useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/245-edit-document-outline-edited (dark).json";
import * as Styled from "./Book.styles";

interface FetusLottieProps {}

const BookLottie: React.FC<FetusLottieProps> = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: "book",
  });

  return (
    <Styled.LottieWrapper>
      <Styled.Lottie ref={container} />
    </Styled.LottieWrapper>
  );
};

export default BookLottie;
