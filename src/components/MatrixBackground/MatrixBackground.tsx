import { useEffect, useRef } from "react";
import * as Styled from "./Matrix.styles";

interface MatrixBackgroundProps {
  timeout?: number;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  timeout = 50,
}) => {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let interval: any;
    const context = canvas.current?.getContext("2d");

    const width = document.body.offsetWidth;
    const height = document.body.offsetHeight;
    canvas.current!.width = width;
    canvas.current!.height = height;

    if (context) {
      context.fillStyle = "#000";
      context.fillRect(0, 0, width, height);

      //! calculate how many 'lines' to show and animate
      const columns = Math.floor(width / 15) + 1;
      const yPositions = Array.from({ length: columns }).fill(0) as number[];

      context.fillStyle = "#000";
      context.fillRect(0, 0, width, height);

      const matrixEffect = () => {
        context.fillStyle = "#0001";
        context.fillRect(0, 0, width, height);

        context.fillStyle = "rgba(0, 85, 85, 0.5)";
        context.font = "0.8rem ubuntu";

        yPositions.forEach((y, index) => {
          const katakana = "アァカサタナミリヰギジ";
          const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          const numbers = "0123456789~!@#$%^&*";
          const alphabet = katakana + latin + numbers;
          const text = alphabet.charAt(
            Math.floor(Math.random() * alphabet.length)
          );
          const x = index * 15;
          context.fillText(text, x, y);

          if (y > 100 + Math.random() * 10000) {
            yPositions[index] = 0;
          } else {
            yPositions[index] = y + 15;
          }
        });
      };

      interval = setInterval(matrixEffect, timeout);
    }

    return () => {
      clearInterval(interval);
    };
  }, [canvas, timeout]);

  return (
    <Styled.MatrixContainer>
      <canvas ref={canvas} />
    </Styled.MatrixContainer>
  );
};

export default MatrixBackground;
