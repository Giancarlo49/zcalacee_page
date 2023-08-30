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
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12 mb-10 lg:mb-0">
          <div>
            <h2 className="h2 leading-tight text-gradient">Meine Songs</h2>
            <p className="max-w-sm mb-8 font-bold">
              Alle meine Songs auf Spotify
            </p>
            <button className="btn btn-sm">Hier alle Songs</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden border-2 border-white/90 rounded-xl">
              <div></div>
              <img
                className="imageCover w-full h-84 object-cover"
                src={belalim}
                alt="belalim cover"
              />
              <div className="text-gradient">Zcalacee feat. Ziya</div>
              <div>
                <span className="text-gradient">Belalim 2023</span>
                <button className="playButton">Play</button>
              </div>
              <div flex-1></div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/90 rounded-xl">
              <div></div>
              <img
                className="imageCover w-full h-84 object-cover"
                src={galerie}
                alt="galerie cover"
              />
              <div className="text-gradient">Zcalacee feat. Momo</div>
              <div>
                <span className="text-gradient">Galerie</span>
                <button className="playButton">Play</button>
              </div>
              <div flex-1></div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/90 rounded-xl">
              <div></div>
              <img
                className="imageCover w-full h-84 object-cover"
                src={poladior}
                alt="poladior cover"
              />
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
