import React from "react";
import { HashLink } from "react-router-hash-link";
const apBooking = () => {
  return (
    <>
      <HashLink
        to="/dental-clinic/slot"
        className="sticky_container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "67px",
          position: "fixed",
          zIndex: "100",
          background: "rgb(21 130 247)",
          bottom: "0",
          textDecoration: "none",
        }}
      >
        <h3 style={{ color: "#fff", fontSize: "18px" }}>BOOK APPOINTMENT</h3>
      </HashLink>
    </>
  );
};

export default apBooking;
