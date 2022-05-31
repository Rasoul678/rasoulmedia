import React, { Children, cloneElement, ReactNode } from "react";
import * as Styled from "./Slider.styles";
import { CSSProperties } from "styled-components";

interface SliderProps extends CSSProperties {
  sliderStyles?: CSSProperties;
  children?: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children, sliderStyles, ...rest }) => {
  const arrayChildren = Children.toArray(children);

  return (
    <Styled.SlidesContainer style={{ ...rest }}>
      {Children.map(arrayChildren, (child, index) => {
        return (
          <Styled.Slider key={index} style={{ ...sliderStyles }}>
            {cloneElement(child as any)}
          </Styled.Slider>
        );
      })}
    </Styled.SlidesContainer>
  );
};

export default Slider;
