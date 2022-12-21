import React, { Children, cloneElement, ReactNode } from "react";
import Slider from "react-slick";
import settings from "./settings";

//! Import Slider styles
import * as Styled from "./Slick.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlickCarouselProps {
  children?: ReactNode;
}

const SlickCarousel: React.FC<SlickCarouselProps> = (props) => {
  const { children } = props;
  const arrayChildren = Children.toArray(children);

  return (
    <Styled.SlickWrapper>
      <Slider {...settings} dotsClass="slick-dots custom-dot">
        {Children.map(arrayChildren, (child) => {
          if (React.isValidElement(child)) {
            return <>{cloneElement(child)}</>;
          }
        })}
      </Slider>
    </Styled.SlickWrapper>
  );
};

export default SlickCarousel;
