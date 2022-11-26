import React from "react";
import LowerFooter from "../Components/LowerFooter";
import "./Contact.css";
const Contact = () => {
  const clinic_data = [
    {
      id: 1,
      c_day: "Monday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 2,
      c_day: "Tuesday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 3,
      c_day: "Wednesday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 4,
      c_day: "Thursday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 5,
      c_day: "Friday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 6,
      c_day: "Saturday",
      c_time: "11:00 AM-9:00 PM",
    },
    {
      id: 7,
      c_day: "Sunday",
      c_time: "5:00 PM-9:00 PM",
    },
  ];
  return (
    <>
      <div className="contact_section_container">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">
              <iframe
                title="gmap_location"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=plot no 178, Om Dental Clinic, Ulwe, Shop- C13, Sai Sapphire, 180, Sector 20, Ulwe, Maharashtra 410206, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2>
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                OPD Hours
              </h2>
            </div>
            <hr />
            {clinic_data.map((e, index) => (
              <div className="clinic_timing" key={index}>
                <p className="current_day">{e.c_day}</p>
                <p className="current_day_timing">{e.c_time}</p>
              </div>
            ))}
            <div className="d_and_c">
              <div className="direction_to_clinic">
                <a
                  href="https://www.google.com/maps?ll=18.978293,73.030934&z=14&t=m&hl=en&gl=US&mapclient=embed&cid=2928691504663646078"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clinic Direction
                </a>
              </div>
              <div className="call_to_clinic">
                <a href="tel:9892729909">Call Clinic</a>
              </div>
            </div>
          </div>
        </div>
        <LowerFooter />

        <div className="copyright_footer">
          <span>
            <i className="fa-regular fa-copyright"></i>
          </span>
          2022 <span id="clinic_name">Om Dental Clinic.</span> All Rights
          Reserved
        </div>
      </div>
    </>
  );
};

export default Contact;
