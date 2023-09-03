import "./BannerStyles.css";
//images
import Image from "../assets/avatar.png";
//icons
import { FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container">
        <div className="container-flex">
          {/* text */}
          <div className="text">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="motion-div"
            >
              <div>
                <span className="text-white">I am</span>
              </div>
              <TypeAnimation
                sequence={[
                  "Singer",
                  2000,
                  "Songwriter",
                  2000,
                  "Video Producer",
                  2000,
                ]}
                speed={50}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="motion-h1"
            >
              Zcalacee
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="motion-div-children-2"
            >
              {/* <button className="btn">Contact me</button> */}
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="motion-div-children"
              >
                
                <a href="#">
                  <FaSpotify className="spotify" />
                </a>
                <a href="#">
                  <FaYoutube className="youtube" />
                </a>
                <a href="#">
                  <FaInstagram className="instagram" />
                </a>
              </motion.div>
            </motion.div>
            {/* socials */}
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="motion-div-element"
          >
            <img src={Image} alt="zcalacee portrait" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
