import React from "react";
import "./NavStyles.css";
// import icons
import { BiHomeAlt } from "react-icons/bi";
import { BsMusicNoteBeamed, BsChatSquareText } from "react-icons/bs";
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
            <BiHomeAlt />
          </Link>

          <Link
            to="music"
            activeClass="active"
            smooth={true}
            spy={true}
            className="link"
          >
            <BsMusicNoteBeamed />
          </Link>

          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="link"
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
