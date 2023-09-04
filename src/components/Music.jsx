// import React from "react";
// //import { motion } from "framer-motion";
// //import { fadeIn } from "../variants";
// import belalim from "../assets/belalim2023.jpg";
// import galerie from "../assets/galerie.jpg";
// import poladior from "../assets/poladior.jpg";
// import "./MusicStyles.css";

// //motion
// import { motion } from "framer-motion";
// //variants
// import { fadeIn } from "../variants";

// const Music = () => {
//   return (
//     <section className="section" id="music">
//       <div className="container">
//         <div className="container-kind">
//           <div>
//             {/* <h2 className="h2">Meine Songs</h2> */}
//             <p className="p">Alle meine Songs auf Spotify</p>
//             {/* <button className="btn btn-sm">Hier alle Songs</button> */}
//             <a
//               href="https://open.spotify.com/intl-de/artist/3KLA0Qw2MqBt9gwXEvVNTO"
//               target="_blank"
//               className="alleSongs btn btn-sm"
//             >
//               Hier alle Songs
//             </a>
//           </div>

//           <div className="cover">
//             <div className="cover-kind">
//               <div></div>
//               <motion.h1
//                 variants={fadeIn("left", 0.2)}
//                 initial="hidden"
//                 whileInView={"show"}
//                 viewport={{ once: false, amount: 0.7 }}
//               >
//                 <img className="imageCover" src={belalim} alt="belalim cover" />
//                 <div className="text-gradient">Zcalacee feat. Ziya</div>
//                 <div>
//                   <span className="text-gradient">Belalim 2023</span>
//                   <button className="playButton">Play</button>
//                 </div>
//                 <div flex-1></div>
//               </motion.h1>
//             </div>

//             <div className="cover-kind">
//               <div></div>
//               <motion.h1
//                 variants={fadeIn("left", 0.2)}
//                 initial="hidden"
//                 whileInView={"show"}
//                 viewport={{ once: false, amount: 0.7 }}
//               >
//                 <img className="imageCover" src={galerie} alt="galerie cover" />
//                 <div className="text-gradient">Zcalacee feat. Momo</div>
//                 <div>
//                   <span className="text-gradient">Galerie</span>
//                   <button className="playButton">Play</button>
//                 </div>
//                 <div flex-1></div>
//               </motion.h1>
//             </div>

//             <div className="cover-kind">
//               <div></div>
//               <motion.h1
//                 variants={fadeIn("left", 0.2)}
//                 initial="hidden"
//                 whileInView={"show"}
//                 viewport={{ once: false, amount: 0.7 }}
//               >
//                 <img
//                   className="imageCover"
//                   src={poladior}
//                   alt="poladior cover"
//                 />
//                 <div className="text-gradient">Zcalacee</div>
//                 <div>
//                   <span className="text-gradient">Poladior</span>
//                   <button className="playButton">Play</button>
//                 </div>
//                 <div flex-1></div>
//               </motion.h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Music;

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

//Karussell importieren
import Carousel from "./Carousel.jsx";

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
              <Carousel />
            </div>
            <div flex-1></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
