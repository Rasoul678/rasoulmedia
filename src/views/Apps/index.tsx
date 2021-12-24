import { useRef } from "react";
import ComingSoonJson from "assets/animations/87843-coming-soon.json";
import useLottie from "hooks/useLottie";

const Apps: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: ComingSoonJson,
    name: "comingSoon",
  });

  return (
    <div
      style={{
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1>Apps</h1>
      <div ref={container} />
    </div>
  );
};

export default Apps;
