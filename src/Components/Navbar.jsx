import React from "react";
import logo_img from "./images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src={logo_img} alt="om dental clinic logo" />
          <h2>Dental Clinic</h2>
        </div>
        <div className="links">
          <div className="MenuItems">
            <Link to="/">Home </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/about">About</Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/appointment">Appointment </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/services">Services </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/contact">Contact </Link>
          </div>
        </div>
        <div className="toggle_menu_icons">
          <MenuIcon className="hamburger_menu" />
          <CloseIcon className="close_menu" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
