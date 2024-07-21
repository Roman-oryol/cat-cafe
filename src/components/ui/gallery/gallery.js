import Swiper from "swiper";
import { useRef, useState, useEffect } from "react";
import leftArrow from "/src/assets/left-arrow.svg";
import rightArrow from "/src/assets/right-arrow.svg";

import {
  SliderWrapper,
  Slider,
  Image,
  SliderPreview,
  ImagePreview,
} from "./style";

import { register } from "swiper/element/bundle";
register();


function Gallery({ slides }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      className: "my-thumbs",
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            width: 64px;
            height: 64px;
            background-color: #ff732b;
            background-position: center;
            background-size: 24px 24px;
            background-repeat: no-repeat;
            border-radius: 50%;
          }

          .swiper-button-prev {
            left: -94px;
            background-image: url(${leftArrow});
          }

          .swiper-button-next {
            right: -94px;
            background-image: url(${rightArrow});
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-button-prev svg,
          .swiper-button-next svg {
            display: none;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <SliderWrapper>
      <Slider>
        <swiper-container space-between={0} loop thumbs-swiper=".my-thumbs">
          {slides &&
            slides.length &&
            slides.map((slide) => (
              <swiper-slide key={slide.id}>
                <Image
                  src={slide.src}
                  width={726}
                  height={408}
                  alt={slide.alt}
                />
              </swiper-slide>
            ))}
        </swiper-container>
      </Slider>
      <SliderPreview>
        <swiper-container
          ref={swiperRef}
          init="false"
          space-between="20"
          slides-per-view="4"
          loop
        >
          {slides &&
            slides.length &&
            slides.map((slide) => (
              <swiper-slide key={slide.id}>
                <ImagePreview
                  src={slide.src}
                  width={166}
                  height={128}
                  alt={slide.alt}
                />
              </swiper-slide>
            ))}
        </swiper-container>
      </SliderPreview>
    </SliderWrapper>
  );
}

export default Gallery;
