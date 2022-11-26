import React from "react";
import { Link } from "react-router-dom";
import about_long_des_data from "../Pages/PagesData/AboutData";
import "./LowerFooter.css";
import footer_01 from "../Pages/images/footer_01.png";
import footer_02 from "../Pages/images/footer_01.png";

function LowerFooter() {
  const contact_recent_data = [
    {
      index: 1,
      rp_img: footer_01,
      rp_text:
        "If you have any questions that are beyond the scope of this help file, please refer to the Support section. Thanks so much",
      rp_btn: "read more",
    },
    {
      index: 2,
      rp_img: footer_02,
      rp_text:
        "If you have any questions that are beyond the scope of this help file, please refer to the Support section. Thanks so much",
      rp_btn: "read more",
    },
  ];

  const nav_data = [
    { index: 1, link_to: "/", nav_name: "Home" },
    { index: 2, link_to: "/dental-clinic/about", nav_name: "About" },
    { index: 3, link_to: "/dental-clinic/treatments", nav_name: "Treatments" },
    {
      index: 4,
      link_to: "/dental-clinic/appointment",
      nav_name: "Appointment",
    },
    { index: 5, link_to: "/dental-clinic/contact", nav_name: "Contact Us" },
  ];
  const contact_data = [
    {
      index: 1,
      title: "Email:",
      cu_data: " ghadgekomal51@gmail.com",
    },
    {
      index: 2,
      title: "Phone:",
      cu_data: " 7261922208",
    },
  ];

  const contact_link = [
    {
      index: 1,
      img: <i class="fa-brands fa-facebook-f"></i>,
      on_link: "https://www.facebook.com/",
    },
    {
      index: 2,
      img: <i class="fa-brands fa-instagram"></i>,
      on_link: "https://www.instagram.com/",
    },
    {
      index: 3,
      img: <i class="fa-brands fa-twitter"></i>,
      on_link: "https://www.twitter.com/",
    },
    {
      index: 4,
      img: <i class="fa-sharp fa-solid fa-globe"></i>,
      on_link: "https://dentalclinic-snowy.vercel.app/",
    },
  ];
  return (
    <>
      <div className="lower_outer_footer_container">
        <div className="about_us">
          <div className="wrapper_container_ab">
            <h2>About Us</h2>
            <p>{about_long_des_data.text}</p>
          </div>
        </div>
        <div className="recent_posts">
          <h2>Recent Post</h2>
          {contact_recent_data.map((data, index) => {
            return (
              <div className="rp_data" key={index}>
                <img src={data.rp_img} alt="" />
                <div className="rp_compile_container">
                  <p>{data.rp_text}</p>
                  <a href="#">{data.rp_btn}</a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer_menu">
          <div className="wrapper_container_fm">
            <h2>Footer Menu</h2>
            <div className="footer_data_menu">
              {nav_data.map((data, index) => {
                return (
                  <Link className="nav_data" key={index} to={data.link_to}>
                    {data.nav_name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact_us">
          <div className="wrapper_container_cu">
            <h2>Contact Us</h2>
            <div className="contact_address">
              <address>
                plot no 178, Shop- C13, Sai Sapphire, 180, Sector 20, Ulwe,
                Maharashtra 410206, India
              </address>
            </div>
            <div className="contact_data">
              {contact_data.map((data, index) => {
                return (
                  <p className="cs_data" key={index}>
                    <span style={{ color: "#0396fe" }}>{data.title} </span>
                    {data.cu_data}
                  </p>
                );
              })}
            </div>
            <div className="contact_links">
              {contact_link.map((data, index) => {
                return (
                  <a
                    className="contact_data_links"
                    key={index}
                    href={data.on_link}
                  >
                    {data.img}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerFooter;
