import React from "react";
import "./HeaderStyles.css";
import Logo from "../assets/logo.svg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="headerZone">
          {/* logo */}
          <a href="#">
            <img
              src={Logo}
              alt="Zcalacee Logo"
              style={{ width: "200px", height: "auto" }}
            />
          </a>
          {/* button */}
          <Link to="music" activeClass="active" smooth={true} spy={true}>
            <button className="btn btn-sm">MY MUSIC</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
