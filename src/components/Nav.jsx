import React from "react";
import "./NavStyles.css";
// import icons
import { BiHomeAlt } from "react-icons/bi";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { PiShootingStarLight } from "react-icons/pi";
//link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        {/* nav inner */}
        <div className="navIcons">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="link"
          >
            <BiHomeAlt className="iconHover" />
          </Link>

          <Link
            to="music"
            activeClass="active"
            smooth={true}
            spy={true}
            className="link"
          >
            <BsMusicNoteBeamed className="iconHover" />
          </Link>

          <Link
            to="news"
            activeClass="active"
            smooth={true}
            spy={true}
            className="link"
          >
            <PiShootingStarLight className="iconHover" />
          </Link>
        </div>
        <div className="footer">
          <div className="impressum">impressum</div>
          <div className="luxelevare"><p>&copy; 2023 <a href="mailto:luxelevare@gmail.com">luxelevare</a></p></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
