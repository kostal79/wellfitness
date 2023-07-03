import React from "react";
import "./BannerSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Slide1 from "./Slide1/Slide1";
import { ReactComponent as RightArrowSVG } from "@assets/svg/right-arrow.svg";
import { ReactComponent as LeftArrowSVG } from "@assets/svg/left-arrow.svg";

const BannerSlider = () => {
  return (
    <div className="banner-slider">
      <Swiper
        navigation={{
          nextEl: ".swiper-custom-button-next",
          prevEl: ".swiper-custom-button-prev",
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={30}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <div className="banner-custom-navigation-block">
          <div className="swiper-custom-button-next">
            <LeftArrowSVG />
          </div>
          <div className="swiper-custom-button-prev">
            <RightArrowSVG />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
