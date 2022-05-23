import styled from "styled-components";


export const SwiperWrapper = styled.div`
  .swiper {
    width: 100%;
    height: 10rem;
  }

  .swiper-slide {
    text-align: center;
    font-size: 1rem;
    background: #ccc;
    border-radius: 1rem;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
`;
