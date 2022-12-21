import styled from "styled-components";

export const SlickWrapper = styled.div`
  .swiper {
    width: 100%;
    height: 10rem;
  }

  button.slick-arrow.slick-prev::before {
    color: ${({ theme }) => theme.border};
    opacity: 1;
    font-size: 2.5rem;
  }
  
  button.slick-arrow.slick-prev {
    left: -45px;
  }

  button.slick-arrow.slick-next::before {
    color: ${({ theme }) => theme.border};
    opacity: 1;
    font-size: 2.5rem;
  }

  .custom-dot {
    button::before {
      color: ${({ theme }) => theme.text};
      font-size: 0.85rem;
      opacity: 0.5;
    }

    li[class="slick-active"] button::before {
      color: ${({ theme }) => theme.border};
      opacity: 1;
      font-size: 1.2rem;
    }
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
