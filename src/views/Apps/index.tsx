import { useRef } from "react";
import ComingSoonJson from "assets/animations/87843-coming-soon.json";
import useLottie from "hooks/useLottie";
import { View } from "components/Global/GlobalStyles";

const Apps: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: ComingSoonJson,
    name: "comingSoon",
  });

  return (
    <View>
      <h1>Apps</h1>
      <div ref={container} />
    </View>
  );
};

export default Apps;
