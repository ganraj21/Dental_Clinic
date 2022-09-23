import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo"></div>
        <div className="links">
          <div className="MenuItems">
            <a href="#">Home </a>
          </div>
          <div className="MenuItems">
            <a href="#">About </a>
          </div>
          <div className="MenuItems">
            <a href="#">Appointment </a>
          </div>
          <div className="MenuItems">
            <a href="#">Services </a>
          </div>
          <div className="MenuItems">
            <a href="#">Contact </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
