import React, { useState } from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import slider_one from "./images/slide_one.webp";
import slider_two from "./images/slide_two.png";
import slider_three from "./images/slide_three.png";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [allImages] = useState([slider_one, slider_two, slider_three]);

  setInterval(() => {
    let i = 0;
    setSelectedImage(allImages[i + 1]);
    console.log(allImages[i]);
  }, 5000);

  return (
    <>
      <div className="slider_container">
        <div className="slider-images">
          <div className="slider_image" id="si_01">
            <img id="img_01" alt="" src={selectedImage} />
          </div>

          <div className="front_container">
            <div className="front_page_info">
              <h2 style={{ fontSize: "51px", margin: "0", textAlign: "left" }}>
                We Care For Your Smile
              </h2>
              <p>
                We Believe Everyone should have easy access to great dental
                clinic
              </p>
              <div className="social_links"></div>
            </div>
            <div className="slider_controls">
              <div className="circle_dot_class">
                <span></span>
              </div>
              <div className="circle_dot_class">
                <span></span>
              </div>
              <div className="circle_dot_class">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clinic_container">
        <div className="clinic_info">
          <div className="basic_info" id="info_01">
            <h2>Flexible Schedule</h2>
            <p>
              We work on holidays, besides working late on regular days. In case
              of emergencies we accept bookings.
            </p>
            <div className="transperent_btn">Read More</div>
          </div>
          <div className="basic_info" id="info_02">
            <h2>Best Price Guarantee</h2>
            <p>
              Our reasonable prices made thousands of people smile with a new,
              beautiful, irresistible smile, as never before!!
            </p>
            <div className="transperent_btn">Read More</div>
          </div>
          <div className="basic_info" id="info_03">
            <h2>Opening Hours</h2>
            <p>
              Monday – Saturday: 10.00 am – 10.00 pm Sunday: 5.00 pm – 10.00 pm
            </p>
            <div className="transperent_btn" id="tr_btn_01">
              Book An Appointment
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// onClick={() => {
//   if (selectedImage > 0) setSelectedImage(selectedImage - 1);
// }}

// onClick={() => {
//   if (selectedImage < allImages.length - 1)
//     setSelectedImage(selectedImage + 1);
// }}
