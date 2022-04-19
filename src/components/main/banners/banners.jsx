import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import BANNERS from "../../../constants/banners";
import Banner from "./banner/banner";

import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import banner4 from "../../../assets/banner/banner4.png";
import { ReactComponent as LeftArrow } from "../../../assets/SVG/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/SVG/right-arrow.svg";

import BannersStyle from "./banners.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banners = () => {
  const imagesList = BANNERS.map((item) => (
    <SwiperSlide key={item.id}>
      <img
        className={BannersStyle.bigBannerImage}
        src={item.src}
        alt={item.alt}
      />
    </SwiperSlide>
  ));

  return (
    <article className={BannersStyle.wrapper}>
      <div className={BannersStyle.item1} data-test-id="main-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".rightSliderArrow",
            prevEl: ".leftSliderArrow",
          }}
          className={BannersStyle.swiper}
        >
          {imagesList}
        </Swiper>

        <div className={BannersStyle.bigBannerMask}>
          <div className={BannersStyle.bigBannerContainer}>
            <div className="leftSliderArrow">
              <LeftArrow />
            </div>
            <div className={BannersStyle.bigBannerWrapper}>
              <p className={BannersStyle.bigBannerText}>BANNER</p>
              <p className={BannersStyle.bigBannerTitle}>YOUR TITLE TEXT</p>
            </div>
            <div className="rightSliderArrow">
              <RightArrow />
            </div>
          </div>
        </div>
      </div>

      <div className={BannersStyle.item2}>
        <Banner
          tittle="WOMEN"
          backgroundUrl={banner2}
          altBackground="banner2"
        />
      </div>
      <div className={BannersStyle.item3}>
        <Banner tittle="MEN" backgroundUrl={banner3} altBackground="banner3" />
      </div>
      <div className={BannersStyle.item4}>
        <Banner
          tittle="ACCESSORIES"
          backgroundUrl={banner4}
          altBackground="banner4"
        />
      </div>
    </article>
  );
};

export default Banners;

/*
export const Swipe = ({ images, nextEl, prevEl, controller, onSwiper }) => {
  const next = `.${nextEl}`;
  const prev = `.${prevEl}`;

  const imagesList = images.map((item) => (
    <SwiperSlide key={item.id}>
      <img
        className={BannersStyle.bigBannerImage}
        src={item.src}
        alt={item.alt}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      onSwiper={onSwiper}
      controller={controller}
      modules={[Navigation, Controller]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: next,
        prevEl: prev,
      }}
      className={BannersStyle.swiper}
    >
      {imagesList}
    </Swiper>
  );
};
*/
