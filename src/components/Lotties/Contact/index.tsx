import { HTMLAttributes, useRef } from "react";
import useLottie from "hooks/useLottie";
import * as Styled from "./Contact.styles";
import contactJson from "assets/animations/lordicons/red/981-consultation-outline-edited (dark).json";

interface ContactLottieProps extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const ContactLottie: React.FC<ContactLottieProps> = (props) => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: contactJson,
    name: props.name || "contact",
    loop: false,
  });

  return <Styled.Lottie ref={container} {...props} />;
};

export default ContactLottie;
