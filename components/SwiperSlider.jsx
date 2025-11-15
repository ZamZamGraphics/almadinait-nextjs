"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function SwiperSlider({
  children,
  slidesPerView = 1,
  breakpoints = {},
  className = "",
  autoplayDelay = 3000,
}) {
  let childArray = React.Children.toArray(children).filter(Boolean);
  if (childArray.length === 0) return null;

  const wrappedSlides = childArray.map((child, idx) => {
    const isAlreadySwiperSlide =
      React.isValidElement(child) &&
      (child.type === SwiperSlide ||
        (child.type &&
          (child.type.displayName === "SwiperSlide" ||
            child.type.name === "SwiperSlide")));

    if (isAlreadySwiperSlide) {
      return React.cloneElement(child, { key: child.key ?? `slide-${idx}` });
    }

    return (
      <SwiperSlide key={`slide-${idx}`}>
        <div style={{ width: "100%", height: "100%" }}>{child}</div>
      </SwiperSlide>
    );
  });

  const allowLoop = wrappedSlides.length > slidesPerView;

  return (
    <div className={className}>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        breakpoints={breakpoints}
        slidesPerView={slidesPerView}
        loop={allowLoop}
        autoplay={
          allowLoop && autoplayDelay
            ? { delay: autoplayDelay, disableOnInteraction: false }
            : false
        }
        pagination={{ clickable: true }}
        watchSlidesProgress={true}
        direction="horizontal"
        style={{ width: "100%" }}
      >
        {wrappedSlides}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
