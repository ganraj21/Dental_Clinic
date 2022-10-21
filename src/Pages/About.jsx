import React from "react";
import Button from "@mui/material/Button";
import "./About.css";
import about_img from "./images/flat-dental-care-concept-illustration_23-2149002069.jpg";
import Profile from "./Profile";
const About = () => {
  return (
    <>
      <div className="about_section_container">
        <h2 className="about_title">
          <span>
            <i class="fa-solid fa-angles-right"></i>
          </span>
          About US
        </h2>
        <div className="about_container">
          <div className="about_info">
            <p className="about_short_descrp">
              We’re glad you hand your dental health concerns to our skilled
              hands.
            </p>
            <p className="about_long_descrp">
              We’ll make sure to deliver the best possible healthcare to all our
              patients! Of course, we always complement our main services with a
              customer service oriented approach. We sincerely believe that
              visiting a dentist shouldn’t be a frightening or stressful
              experience! We provide an equally comfortable experience of
              relaxation for all our young and adult customers! Also we
              implement a lot of pain management and anesthesia options.
            </p>
            <Button variant="contained">Read More</Button>
          </div>
          <div className="about_image">
            <img src={about_img} alt="" />
          </div>
        </div>
        <Profile />
      </div>
    </>
  );
};

export default About;
