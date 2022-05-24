import React, { Children, cloneElement, useCallback } from "react";
//! Import Swiper React components
import {
  Swiper,
  SwiperSlide,
  SwiperProps,
  SwiperSlideProps,
} from "swiper/react/swiper-react";

//! Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import * as Styled from "./Swiper.styles";

//! import required modules
import { Autoplay } from "swiper";
import useResponsive from "hooks/useResponsive";
import { useMediaQuery } from "react-responsive";

interface SwiperCarouselProps extends SwiperProps {
  swiperSlideOptions?: SwiperSlideProps;
}

const SwiperCarousel: React.FC<SwiperCarouselProps> = (props) => {
  const { children, swiperSlideOptions, ...rest } = props;
  const arrayChildren = Children.toArray(children);
  const { isBigScreenDevice, isDesktopOrLaptop, isMobile, isTablet } =
    useResponsive();

  const isMobileToTablet = useMediaQuery({ minWidth: 550, maxWidth: 750 });

  const getPerView = useCallback(() => {
    if (isBigScreenDevice || isDesktopOrLaptop) {
      return 3.5;
    }

    if (isMobile) {
      return 1.1;
    }

    if (isMobileToTablet) {
      return 2;
    }

    if (isTablet) {
      return 3;
    }

    return 1;
  }, [
    isBigScreenDevice,
    isDesktopOrLaptop,
    isTablet,
    isMobile,
    isMobileToTablet,
  ]);

  return (
    <Styled.SwiperWrapper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={getPerView()}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        {...rest}
      >
        {Children.map(arrayChildren, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <SwiperSlide {...swiperSlideOptions} key={index}>
                {cloneElement(child)}
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </Styled.SwiperWrapper>
  );
};

export default SwiperCarousel;
