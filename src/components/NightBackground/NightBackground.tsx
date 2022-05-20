import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { hexToRgb } from "utils/helpers";
import * as Styled from "./Night.styles";

interface Star {
  x: number;
  y: number;
  z: number;
}

interface MatrixBackgroundProps {}

const NightBackground: React.FC<MatrixBackgroundProps> = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const { name, border } = useTheme();

  useEffect(() => {
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 5;
    const STAR_SIZE = 2.5;
    const STAR_MIN_SCALE = 0.2;

    const context = canvas.current?.getContext("2d");

    let scale = 1;
    let width: number;
    let height: number;
    let stars: Star[] = [];

    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

    generate();
    resize();
    step();

    function generate() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function placeStar(star: Star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function resize() {
      scale = window.devicePixelRatio || 1;
      width = canvas.current!.width = window.innerWidth * scale;
      height = canvas.current!.height = window.innerHeight * scale;
      stars.forEach(placeStar);
    }

    function step() {
      context?.clearRect(0, 0, width, height);
      render();

      requestAnimationFrame(step);
    }

    function render() {
      const color = hexToRgb(border);
      stars.forEach((star) => {
        if (context) {
          context.beginPath();
          context.lineCap = "round";
          context.lineWidth = star.z * STAR_SIZE * scale;
          context.strokeStyle =
            name === "dark"
              ? `rgba(${color?.r},${color?.g},${color?.b}, ` +
                (0.5 + 0.5 * Math.random()) +
                ")"
              : `rgba(${color?.r},${color?.g},${color?.b}, ` +
                (0.5 + 0.5 * Math.random()) +
                ")";

          context.beginPath();
          context.moveTo(star.x, star.y);

          let tailX = velocity.x * 2;
          let tailY = velocity.y * 2;

          if (Math.abs(tailX) < 0.1) tailX = 0.5;
          if (Math.abs(tailY) < 0.1) tailY = 0.5;

          context.lineTo(star.x + tailX, star.y + tailY);

          context.stroke();
        }
      });
    }
  }, [canvas, name, border]);

  return (
    <Styled.MatrixContainer>
      <canvas ref={canvas} />
    </Styled.MatrixContainer>
  );
};

export default NightBackground;
