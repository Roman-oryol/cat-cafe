import styled from "styled-components";
import arrow from "/src/assets/left-arrow.svg";

export const SliderWrapper = styled.div`
  position: relative;
  width: 914px;
  margin: 0 auto;
  padding: 0 94px;
`;

export const Slider = styled.div`
  width: 100%;
  height: 408px;
  margin-bottom: 24px;
  border-radius: 20px;
`;

export const Image = styled.img`
  display: block;
  // width: 100%;
  // height: auto;
  object-fit: cover;
  border-radius: 20px;
`;

export const SliderPreview = styled.div`
  width: 100%;
  height: 128px;

  swiper-slide {
    filter: brightness(50%);
  }

  .swiper-slide-thumb-active {
    filter: brightness(100%);
  }

  swiper-container::part(container) {
    position: static;
  }
`;

export const ImagePreview = styled.img`
  display: block;
  width: 166px;
  height: 128px;
  border-radius: 12px;
  object-fit: cover;
`;
