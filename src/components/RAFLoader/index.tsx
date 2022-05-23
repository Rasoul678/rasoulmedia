import React, { useCallback, useEffect, useMemo, useRef } from "react";
import Circle from "./utils";

interface RAFLoaderProps {
  width?: number;
}

const RAFLoader: React.FC<RAFLoaderProps> = (props) => {
  const { width } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = React.useRef<number>();
  const circles: Circle[] = useMemo(() => [], []);

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    const canvasWidth = ctx?.canvas.width!;
    const canvasHeight = ctx?.canvas.height!;

    if (ctx) {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      circle.update();
    }

    //! call the draw function again!
    requestRef.current = requestAnimationFrame(draw);
  }, [circles]);

  //! This function creates the circles that you end up seeing
  const createCircles = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const canvasWidth = ctx?.canvas.width;
      const canvasHeight = ctx?.canvas.height;

      //! change the range of this loop to adjust the number of circles that you see
      for (let i = 0; i < 50; i++) {
        let radius = 5 + Math.random() * 30;
        let initialX = canvasWidth! / 2;
        let initialY = canvasHeight! / 2;
        let rotationRadius = 1 + Math.random() * 30;
        let angle = Math.random() * 2 * Math.PI;

        let signHelper = Math.floor(Math.random() * 2);
        let sign;

        // Randomly specify whether the circle will be rotating clockwise or counterclockwise
        if (signHelper === 1) {
          sign = -1;
        } else {
          sign = 1;
        }

        //! create the Circle object
        let circle = new Circle(
          angle,
          sign,
          radius,
          rotationRadius,
          initialX,
          initialY,
          ctx
        );

        circles.push(circle);
      }

      //! call the draw function approximately 60 times a second
      requestRef.current = requestAnimationFrame(draw);
    },
    [circles, draw]
  );

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");

    if (ctx) {
      createCircles(ctx);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [createCircles]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          backgroundColor: "transparent",
          width,
        }}
      ></canvas>
    </div>
  );
};

export default RAFLoader;
