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
        pagination={false} // Punkte darunter deaktiviert
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={belalim2023} />

          <h3>
            Belalim 2023 <br /> Zcalacee & Ziya
          </h3>

          <a
            href="https://open.spotify.com/intl-de/track/7D4iG5l7PNrFYnDiB1YXUM"
            target="_blank"
            className="btn btn-sm"
          >
            <button>Play</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={galerie} />
          <h3>
            Galerie <br /> Zcalacee & Momo Chahine
          </h3>
          <a
            href="https://open.spotify.com/intl-de/track/3MO40EQ3yCWS5gSQNLxmDk"
            target="_blank"
          >
            <button>Play</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={poladior} />
          <h3>
            Poladior <br /> Zcalacee
          </h3>
          <a
            href="https://open.spotify.com/intl-de/track/53FoMbvIThwS9FIVEAMm6u"
            target="_blank"
          >
            <button>Play</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={bombe} />
          <h3>
            Bombe <br /> Zcalacee
          </h3>
          <a
            href="https://open.spotify.com/intl-de/album/4J9pSSPIShcelDWy6jpjwM"
            target="_blank"
          >
            <button>Play</button>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={leg_nicht_auf} />
          <h3>
            Leg nicht auf <br /> Zcalacee
          </h3>
          <a
            href="https://open.spotify.com/intl-de/track/5DHDGIMi6NzNMyjQiAvQ5K"
            target="_blank"
          >
            <button>Play</button>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
