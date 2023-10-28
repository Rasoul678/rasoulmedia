import React, { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { UseCountUpProps } from "react-countup/build/useCountUp";
import * as Styled from "./CountUp.styles";

interface CountUpProps extends Omit<UseCountUpProps, "ref"> {}

const Countup: React.FC<CountUpProps> = (props) => {
  const countUpRef = useRef(null);
  const { start, reset } = useCountUp({ ref: countUpRef, ...props });

  useEffect(() => {
    start();

    return () => {
      reset();
    };
  }, [start, reset, props.end]);

  return <Styled.Countup ref={countUpRef} />;
};

export default Countup;
