import React, { useState } from "react";
import logo_img from "./images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src={logo_img} alt="om dental clinic logo" />
          <h2>Dental Clinic</h2>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <Link to="/" onClick={toggleClass}>
              Home{" "}
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/about" onClick={toggleClass}>
              About
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/appointment" onClick={toggleClass}>
              Appointment{" "}
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/services" onClick={toggleClass}>
              Services{" "}
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/contact" onClick={toggleClass}>
              Contact{" "}
            </Link>
          </div>
        </div>
        <div className="toggle_menu_icons">
          <div className="hamburger_menu" id="hamburger">
            <MenuIcon onClick={toggleClass} />
          </div>
          <div className="close_menu">
            <CloseIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
