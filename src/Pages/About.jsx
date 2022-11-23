import React from "react";
import styles from "./About.css";
import about_img from "./images/about_img.webp";
import { Link } from "react-router-dom";
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
                We’ll make sure to deliver the best possible healthcare to all
                our patients! Of course, we always complement our main services
                with a customer service oriented approach. We sincerely believe
                that visiting a dentist shouldn’t be a frightening or stressful
                experience! We provide an equally comfortable experience of
                relaxation for all our young and adult customers! Also we
                implement a lot of pain management and anesthesia options.
              </p>
              <div className="about_align_btn">
                <Link
                  to={"/dental-clinic/team"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <button className="more_info_btn">Read More</button>
                </Link>
              </div>
            </div>
            <div className="about_image">
              <img src={about_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
