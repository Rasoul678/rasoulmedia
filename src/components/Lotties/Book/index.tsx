import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import json from "assets/animations/lordicons/green/245-edit-document-outline-edited (dark).json";
import * as Styled from "./Book.styles";

interface FetusLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const BookLottie: React.FC<FetusLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: json,
    name: props.name || "book",
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default BookLottie;
