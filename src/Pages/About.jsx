import React from "react";
import styles from "./About.css";
import about_img from "./images/about_img.webp";
import { Link } from "react-router-dom";
import about_long_des_data from "./PagesData/AboutData";
const About = () => {
  return (
    <>
      <div className={styles.example} style={{ backgroundColor: "#e5e5e5" }}>
        <div className="about_section_container">
          <h2 className="about_title" data-aos="fade-right">
            <span className="about_title_logo">
              <i class="fa-solid fa-angles-right"></i>
            </span>
            About US
          </h2>
          <div className="about_container">
            <div className="about_infos">
              <p className="about_short_descrp" data-aos="fade-down">
                We’re glad you hand your dental health concerns to our skilled
                hands.
              </p>
              <p className="about_long_descrp" data-aos="fade-down">
                {about_long_des_data.text}
              </p>
              <div className="about_align_btn" data-aos="fade-down">
                <Link
                  to={"/dental-clinic/team"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <button className="more_info_btn">Read More</button>
                </Link>
              </div>
            </div>
            <div className="about_image" data-aos="fade-left">
              <img src={about_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
