import { useRef } from "react";
import ComingSoonJson from "assets/animations/87843-coming-soon.json";
import useLottie from "hooks/useLottie";
import { View } from "components/Global/GlobalStyles";
import MainLayout from "layouts/Main";

const Code: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLottie({
    container: container as any,
    animationData: ComingSoonJson,
    name: "comingSoon",
  });

  return (
    <View>
      <MainLayout>
        <h1>Code</h1>
        <div ref={container} />
      </MainLayout>
    </View>
  );
};

export default Code;
