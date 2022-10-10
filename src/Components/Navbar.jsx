import React, { useState } from "react";
import logo_img from "./images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
<<<<<<< HEAD
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("hmcross").style.display = "flex";
    setActive(!isActive);
  };
  //const [mac, setMac] = useState(toggleClass);
  const toggleClassForClose = () => {
    document.getElementById("hamburger").style.display = "flex";
    document.getElementById("hmcross").style.display = "none";
    setActive(!isActive);
=======
    document.getElementById('hamburger').style.display = 'none';
document.getElementById('hmcross').style.display = 'flex';
    setActive(!isActive);
  };
//const [mac, setMac] = useState(toggleClass);
  const toggleClassForClose = () => {
       document.getElementById('hamburger').style.display = 'flex';
       document.getElementById('hmcross').style.display = 'none';
       setActive(!isActive);
>>>>>>> 65362179a0d761a822996f55cc34a2bc339b2c7c
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
            <Link to="/" onClick={toggleClassForClose}>
              Home
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/about" onClick={toggleClassForClose}>
              About
            </Link>
          </div>
          <div className="MenuItems">
<<<<<<< HEAD
            <Link to="/dental-clinic/appointment" onClick={toggleClassForClose}>
=======
            <Link to="/dental-clinic/appointment" onClick={toggleClassForClose} >
>>>>>>> 65362179a0d761a822996f55cc34a2bc339b2c7c
              Appointment
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/services" onClick={toggleClassForClose}>
              Services
            </Link>
          </div>
          <div className="MenuItems">
            <Link to="/dental-clinic/contact" onClick={toggleClassForClose}>
              Contact
            </Link>
          </div>
        </div>
        <div className="toggle_menu_icons">
          <div className="hamburger_menu" id="hamburger">
            <MenuIcon onClick={toggleClass} />
          </div>
          <div className="close_menu" id="hmcross">
<<<<<<< HEAD
            <CloseIcon onClick={toggleClassForClose} />
=======
            <CloseIcon onClick={toggleClassForClose}/>
>>>>>>> 65362179a0d761a822996f55cc34a2bc339b2c7c
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
