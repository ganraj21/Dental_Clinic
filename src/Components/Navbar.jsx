import React, { useState } from "react";
import logo_img from "./images/logo.png";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./Navbar.css";
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  const closeMobileMenu = () => {
    setActive(false);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo_img} alt="om dental clinic logo" />
          </Link>
          <h2>Dental Clinic</h2>
        </div>
        <div className={isActive ? "active_links" : "links"}>
          <div className="MenuItems">
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/about" onClick={closeMobileMenu}>
              About
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/services" onClick={closeMobileMenu}>
              Services
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/contact" onClick={closeMobileMenu}>
              Contact
            </Link>
          </div>
          <div className="MenuItems" id="Appointment_menu">
            <Link to="/dental-clinic/appointment" onClick={closeMobileMenu}>
              Appointment
            </Link>
          </div>
        </div>
        <div className="toggle_menu_icons" onClick={handleClick}>
          <i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
