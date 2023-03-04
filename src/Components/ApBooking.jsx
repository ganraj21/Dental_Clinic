import React from "react";

const apBooking = () => {
  return (
    <>
      <div
        className="sticky_container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "60px",
          position: "fixed",
          zIndex: "100",
          background: "rgb(21 130 247)",
          bottom: "0",
        }}
      >
        <h3 style={{ color: "#fff", fontSize: "18px" }}>BOOK APPOINTMENT</h3>
      </div>
    </>
  );
};

export default apBooking;
