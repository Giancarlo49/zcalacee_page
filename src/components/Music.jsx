import React from "react";
//import { motion } from "framer-motion";
//import { fadeIn } from "../variants";
import belalim from "../assets/belalim2023.jpg";
import galerie from "../assets/galerie.jpg";
import poladior from "../assets/poladior.jpg";
import "./MusicStyles.css";

//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

//Swiper Slider importieren
import SwiperSlider from "./SwiperSlider.jsx";

const Music = () => {
  return (
    <section className="section" id="music">
      <div className="container">
        <div className="container-kind">
          <div>
            {/* <h2 className="h2">Meine Songs</h2> */}
            <p className="p">Alle meine Songs auf Spotify</p>
            {/* <button className="btn btn-sm">Hier alle Songs</button> */}
            <a
              href="https://open.spotify.com/intl-de/artist/3KLA0Qw2MqBt9gwXEvVNTO"
              target="_blank"
              className="alleSongs btn btn-sm"
            >
              Hier alle Songs
            </a>
            <div>
              <SwiperSlider />
            </div>
            <div flex-1></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
