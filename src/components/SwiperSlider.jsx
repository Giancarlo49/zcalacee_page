import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./SwiperSliderStyles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

//import images
import belalim2023 from "../assets/belalim2023.jpg";
import galerie from "../assets/galerie.jpg";
import poladior from "../assets/poladior.jpg";
import bombe from "../assets/bombe.jpg";
import leg_nicht_auf from "../assets/leg_nicht_auf.jpeg";
import werden_wir_uns_wiedersehen from "../assets/werden_wir_uns_wiedersehen.jpeg";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={belalim2023} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={galerie} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={poladior} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bombe} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={leg_nicht_auf} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={werden_wir_uns_wiedersehen} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
