import React, { CSSProperties, memo } from "react";

type IProps = {
  hasAnimation: boolean;
  color: string;
};

const Sparkler: React.FC<IProps> = ({ hasAnimation, color }) => {
  const sparklerNumber = React.useMemo(() => [...new Array(36)], []);

  return (
    <div className="sparkler-light">
      {sparklerNumber.map((_, i) => {
        return (
          <div
            key={i}
            className="spark"
            style={
              {
                "--spark-color": `#${color}`,
                "--spark-rotate": `${(i + 1) * 10}deg`,
                "--spark-delay": `${Math.round(Math.random() * 1000)}ms`,
                "--spark-animation": `${
                  hasAnimation
                    ? "sparkler-sparkle 0.5s infinite linear"
                    : "none"
                }`,
              } as CSSProperties
            }
          ></div>
        );
      })}
    </div>
  );
};

export default memo(Sparkler);
