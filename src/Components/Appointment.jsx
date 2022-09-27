import React from "react";
import app_img from "./images/front_img.jpg";
import Button from "@mui/material/Button";
import "./Appointment.css";
const Appointment = () => {
  return (
    <>
      <div className="app_container">
        <div className="upper_section">
          <img src={app_img} alt="" />
        </div>
        <div className="appointment_section_container">
          <div className="appointment_section">
            <h2>How We Can Help…</h2>
            <p>
              We Offer a Wide Range of Procedures to Help You Get the Perfect
              Smile
            </p>
            <Button variant="contained" style={{ background: "#F43E04" }}>
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
