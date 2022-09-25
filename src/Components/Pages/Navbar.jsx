import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img src="/" alt="" />
        </div>
        <div className="links">
          <div className="MenuItems">
            <a href="/">Home </a>
          </div>
          <div className="MenuItems">
            <a href="/about-us">About </a>
          </div>
          <div className="MenuItems">
            <a href="/appointment">Appointment </a>
          </div>
          <div className="MenuItems">
            <a href="/dental-clinic/services">Services </a>
          </div>
          <div className="MenuItems">
            <a href="/dental-clinic/contact">Contact </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
