import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Styled from "./ErrorFallback.styles";

interface TimeType {
  minutes: string;
  seconds: string;
}

const ErrorFallback = () => {
  const [time, setTime] = useState<TimeType>({ minutes: "0", seconds: "15" });

  function startTimer(
    duration: number,
    setTime: Dispatch<SetStateAction<TimeType>>
  ) {
    let timer = duration;
    let minutes: number | string;
    let seconds: number | string;
    let interval: ReturnType<typeof setInterval>;

    interval = setInterval(function () {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;

      minutes = minutes < 10 ? "0" + minutes : `${minutes}`;
      seconds = seconds < 10 ? "0" + seconds : `${seconds}`;

      if (--timer < 0) {
        clearInterval(interval);
      }

      setTime({ minutes, seconds });
    }, 1000);
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined = undefined;
    startTimer(15, setTime);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      window.location.reload();
    }, 16000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Styled.ErrorFallbackContainer>
      <Styled.FallbackAnimationWrapper>
        <div style={{ textAlign: "center", color: "#F8C004" }}>
          <h2>Error Occurred!</h2>
          <code>
            The page will refresh in{" "}
            <span style={{ color: "crimson", fontSize: "3rem" }}>
              {time.seconds}
            </span>{" "}
            {""}
            seconds
          </code>
        </div>
      </Styled.FallbackAnimationWrapper>
    </Styled.ErrorFallbackContainer>
  );
};

export default ErrorFallback;
