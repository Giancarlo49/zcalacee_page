import React from "react";
//import { motion } from "framer-motion";
//import { fadeIn } from "../variants";
import belalim from "../assets/belalim2023.jpg";
import galerie from "../assets/galerie.jpg";
import poladior from "../assets/poladior.jpg";
import "./MusicStyles.css";

const Music = () => {
  return (
    <section className="section" id="music">
      <div className="container">
        <div className="container-kind">
          <div>
            <h2 className="h2">Meine Songs</h2>
            <p className="p">Alle meine Songs auf Spotify</p>
            <button className="btn btn-sm">Hier alle Songs</button>
          </div>

          <div className="cover">
            <div className="cover-kind">
              <div></div>
              <img className="imageCover" src={belalim} alt="belalim cover" />
              <div className="text-gradient">Zcalacee feat. Ziya</div>
              <div>
                <span className="text-gradient">Belalim 2023</span>
                <button className="playButton">Play</button>
              </div>
              <div flex-1></div>
            </div>

            <div className="cover-kind">
              <div></div>
              <img className="imageCover" src={galerie} alt="galerie cover" />
              <div className="text-gradient">Zcalacee feat. Momo</div>
              <div>
                <span className="text-gradient">Galerie</span>
                <button className="playButton">Play</button>
              </div>
              <div flex-1></div>
            </div>

            <div className="cover-kind">
              <div></div>
              <img className="imageCover" src={poladior} alt="poladior cover" />
              <div className="text-gradient">Zcalacee</div>
              <div>
                <span className="text-gradient">Poladior</span>
                <button className="playButton">Play</button>
              </div>
              <div flex-1></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
