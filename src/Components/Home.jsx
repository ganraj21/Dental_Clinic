import React from "react";
import "./Home.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
// import slider_one from "./images/slider_one.jpg";
// import slider_two from "./images/slider_two.jpg";
// import slider_three from "./images/slider_three.jpg";

const Home = () => {
  return (
    <>
      <div className="slider-images">
        <div className="slider_image" id="si_01">
          <div id="img_01"></div>
          <div className="short_info">
            <h1>Welcome To Dental Clinic</h1>
            <h3>Dental Clinic, Dentist Welcomes you !</h3>
          </div>
        </div>
        <div className="slider_image" id="si_02">
          <div id="img_02"></div>
        </div>
        <div className="slider_image" id="si_03">
          <div id="img_03"></div>
        </div>
        <div className="slider_controls">
          <ChevronLeftIcon style={{ fontSize: "84px", color: "gray" }} />
          <NavigateNextIcon style={{ fontSize: "84px", color: "gray" }} />
        </div>
      </div>

      <div className="clinic_info">
        <div className="basic_info" id="info_01">
          <h2>Flexible Schedule</h2>
          <p>
            We work on holidays, besides working late on regular days. In case
            of emergencies we accept bookings.
          </p>
          <Button variant="contained" style={{ background: "#F43E04" }}>
            Read More
          </Button>
        </div>
        <div className="basic_info" id="info_02">
          <h2>Best Price Guarantee</h2>
          <p>
            Our reasonable prices made thousands of people smile with a new,
            beautiful, irresistible smile, as never before!!
          </p>
          <Button variant="contained" style={{ background: "#F43E04" }}>
            Read More
          </Button>
        </div>
        <div className="basic_info" id="info_03">
          <h2>Opening Hours</h2>
          <p>
            Monday – Saturday: 10.00 am – 10.00 pm Sunday: 5.00 pm – 10.00 pm
          </p>
          <Button variant="contained" style={{ background: "#F43E04" }}>
            Book An Appointment
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
